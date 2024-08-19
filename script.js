$(document).ready(function() {
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
            nombreCompleto: "required",
            nombreUsuario: "required",
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
                mayorDeEdad: true
            }
        },
        messages: {
            nombreCompleto: "Por favor, ingresa tu nombre completo",
            nombreUsuario: "Por favor, ingresa un nombre de usuario",
            email: {
                required: "Por favor, ingresa tu correo electrónico",
                email: "Por favor, ingresa un correo electrónico válido"
            },
            password: {
                required: "Por favor, ingresa una contraseña"
            },
            confirmPassword: {
                required: "Por favor, confirma tu contraseña",
                equalTo: "Las contraseñas no coinciden"
            },
            fechaNacimiento: {
                required: "Por favor, ingresa tu fecha de nacimiento"
            }
        },
        submitHandler: function(form) {
            alert("Formulario enviado correctamente!");
            form.submit();
        }
    });
});
