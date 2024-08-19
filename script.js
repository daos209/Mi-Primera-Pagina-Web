function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const m = hoy.getMonth() - fechaNacimiento.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    return edad;
}

$.validator.addMethod("minAge", function(value, element, minAge) {
    if (this.optional(element)) {
        return true;
    }
    const edad = calcularEdad(new Date(value));
    return edad >= minAge;
}, $.format("Debes tener al menos {0} años para registrarte.", 13));

$(document).ready(function() {
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
                minlength: 6,
                maxlength: 18
            },
            confirmPassword: {
                required: true,
                equalTo: "#password"
            },
            fechaNacimiento: {
                required: true,
                minAge: 13
            }
        },
        messages: {
            nombreCompleto: "Por favor, ingresa tu nombre completo.",
            nombreUsuario: "Por favor, ingresa un nombre de usuario.",
            email: {
                required: "Por favor, ingresa tu correo electrónico.",
                email: "Por favor, ingresa un correo electrónico válido."
            },
            password: {
                required: "Por favor, ingresa una contraseña.",
                minlength: "La contraseña debe tener al menos 6 caracteres.",
                maxlength: "La contraseña no puede exceder los 18 caracteres."
            },
            confirmPassword: {
                required: "Por favor, confirma tu contraseña.",
                equalTo: "Las contraseñas no coinciden."
            },
            fechaNacimiento: {
                required: "Debes ingresar tu fecha de nacimiento.",
                minAge: $.format("Debes tener al menos {0} años para registrarte.", 13)
            }
        },
        submitHandler: function(form) {
            alert("Formulario enviado correctamente!");
            form.submit();
        }
    });
});
