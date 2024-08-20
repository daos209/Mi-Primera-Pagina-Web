$(document).ready(function() {
    $('#registroForm').validate({
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
                minlength: 6,
                maxlength: 18,
                pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,18}$/
            },
            confirmPassword: {
                required: true,
                equalTo: "#password"
            },
            fechaNacimiento: {
                required: true,
                dateISO: true,
                minAge: 13
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
                required: "Por favor ingresa una contraseña.",
                minlength: "La contraseña debe tener al menos 6 caracteres.",
                maxlength: "La contraseña no puede tener más de 18 caracteres."
            },
            confirmPassword: {
                required: "Por favor repite tu contraseña.",
                equalTo: "Las contraseñas no coinciden."
            },
            fechaNacimiento: {
                required: "Por favor ingresa tu fecha de nacimiento.",
                minAge: "Debes tener al menos 13 años para registrarte."
            }
        }
    });

    $.validator.addMethod("minAge", function(value, element, min) {
        var today = new Date();
        var birthDate = new Date(value);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age >= min;
    }, "Debes tener al menos {0} años.");
});
