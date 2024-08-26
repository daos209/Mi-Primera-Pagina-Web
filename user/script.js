// Comprador: Gestión del Carrito y Compras

$(document).ready(function() {
    // Actualizar total del carrito
    function actualizarTotal() {
        let total = 0;
        $('.carrito-item').each(function() {
            const precio = parseFloat($(this).find('.precio').text().replace('€', ''));
            const cantidad = parseInt($(this).find('.cantidad').val(), 10);
            total += precio * cantidad;
        });
        $('#total').text(total.toFixed(2) + ' €');
    }

    // Funcionalidad para cambiar la cantidad de un artículo en el carrito
    $('.cantidad').on('change', function() {
        actualizarTotal();
    });

    // Funcionalidad para eliminar un artículo del carrito
    $('.btn-eliminar-item').on('click', function() {
        $(this).closest('tr').remove();
        actualizarTotal();
    });

    // Funcionalidad para finalizar la compra
    $('#finalizarCompra').on('click', function() {
        // Aquí se debería enviar los datos del carrito al servidor para procesar la compra
        // Ejemplo de cómo se podría hacer una solicitud con jQuery AJAX
        $.ajax({
            url: '/user/finalizar-compra', // Cambia esta URL a la del endpoint correspondiente
            type: 'POST',
            data: {
                // Aquí puedes enviar datos relevantes, como el contenido del carrito
            },
            success: function(response) {
                alert('Compra finalizada con éxito.');
                location.reload(); // Recarga la página para reflejar los cambios
            },
            error: function(xhr, status, error) {
                alert('Error al finalizar la compra. Inténtalo de nuevo.');
            }
        });
    });

    // Cargar historial de compras (en la vista de compras)
    function cargarCompras() {
        $.ajax({
            url: '/user/compras', // Cambia esta URL a la del endpoint correspondiente
            type: 'GET',
            success: function(response) {
                const compras = response.compras;
                const tbody = $('table tbody');
                tbody.empty();

                compras.forEach(function(compra) {
                    tbody.append(`
                        <tr>
                            <td>${compra.fecha}</td>
                            <td>${compra.producto}</td>
                            <td>${compra.cantidad}</td>
                            <td>${compra.precioTotal.toFixed(2)} €</td>
                        </tr>
                    `);
                });
            },
            error: function(xhr, status, error) {
                alert('Error al cargar el historial de compras.');
            }
        });
    }

    // Llamar a la función para cargar compras al cargar la página
    if (window.location.pathname.includes('compras.html')) {
        cargarCompras();
    }
});
