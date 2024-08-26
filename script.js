$(document).ready(function() {
    // Función para agregar un juego al carrito
    function agregarAlCarrito(id, nombre, imagen, precio) {
        // Obtener el carrito actual desde el almacenamiento local
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        
        // Buscar si el juego ya está en el carrito
        let juegoExistente = carrito.find(item => item.id === id);

        if (juegoExistente) {
            // Si el juego ya existe, incrementar la cantidad
            juegoExistente.cantidad++;
        } else {
            // Si el juego no existe, añadirlo con cantidad 1
            carrito.push({
                id: id,
                nombre: nombre,
                imagen: imagen,
                precio: precio,
                cantidad: 1
            });
        }

        // Guardar el carrito actualizado en el almacenamiento local
        localStorage.setItem('carrito', JSON.stringify(carrito));

        alert("Juego añadido al carrito!");
    }

    // Función para mostrar el carrito en carrito.html
    function mostrarCarrito() {
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        let carritoHtml = '';

        if (carrito.length === 0) {
            carritoHtml = '<p>El carrito está vacío.</p>';
        } else {
            carrito.forEach(item => {
                carritoHtml += `
                    <div class="carrito-item mb-3 p-3 border rounded">
                        <img src="${item.imagen}" alt="${item.nombre}" class="img-thumbnail">
                        <h3>${item.nombre}</h3>
                        <p>Precio: $${item.precio.toFixed(2)}</p>
                        <p>Cantidad: ${item.cantidad}</p>
                        <button class="btn btn-danger" onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
                    </div>
                `;
            });
        }

        $('#carrito-contenido').html(carritoHtml);
    }

    // Función para eliminar un juego del carrito
    function eliminarDelCarrito(id) {
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito = carrito.filter(item => item.id !== id);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        mostrarCarrito();
    }

    // Llamar a mostrarCarrito cuando se cargue carrito.html
    if (window.location.pathname.includes('carrito.html')) {
        mostrarCarrito();
    }

    // Validaciones del formulario de registro
    $.validator.addMethod("mayorDeEdad", function(value, element) {
        if (this.optional(element)) {
            return true;
        }
        var today = new Date();
        var birthDate = new Date(value);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age >= 13;
    }, "Debes tener al menos 13 años para registrarte.");

    $.validator.addMethod("contrasenaSegura", function(value, element) {
        return this.optional(element) || /^(?=.*\d)(?=.*[A-Z]).{6,18}$/.test(value);
    }, "La contraseña debe tener entre 6 y 18 caracteres, incluir al menos un número y una letra mayúscula.");

    $("#registroForm").validate({
        rules: {
            nombreCompleto: {
                required: true
            },
            nombreUsuario: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                contrasenaSegura: true
            },
            confirmPassword: {
                required: true,
                equalTo: "#password"
            },
            fechaNacimiento: {
                required: true,
                dateISO: true,
                mayorDeEdad: true
            },
            direccion: {
                required: false
            }
        },
        messages: {
            nombreCompleto: "Por favor ingresa tu nombre completo.",
            nombreUsuario: "Por favor ingresa un nombre de usuario.",
            email: {
                required: "Por favor ingresa tu correo electrónico.",
                email: "Por favor ingresa un correo electrónico válido."
            },
            password: {
                required: "Por favor, ingresa una contraseña."
            },
            confirmPassword: {
                required: "Por favor repite tu contraseña.",
                equalTo: "Las contraseñas no coinciden."
            },
            fechaNacimiento: {
                required: "Por favor ingresa tu fecha de nacimiento.",
                mayorDeEdad: "Debes tener al menos 13 años para registrarte."
            }
        },
        submitHandler: function(form) {
            alert("Formulario enviado correctamente!");
            form.submit();
        }
    });

    // Eventos de clic para agregar juegos al carrito desde las páginas de categoría
    $('.add-to-cart-btn').on('click', function() {
        const id = $(this).data('id');
        const nombre = $(this).data('nombre');
        const imagen = $(this).data('imagen');
        const precio = $(this).data('precio');
        agregarAlCarrito(id, nombre, imagen, precio);
    });

});
