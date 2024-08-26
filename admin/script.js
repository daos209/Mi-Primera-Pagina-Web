// Administrador: Gestión de Productos y Modificación

$(document).ready(function() {
    // Funcionalidad para modificar un producto
    $('#modificarProductoForm').on('submit', function(event) {
        event.preventDefault();
        
        // Obtención de los datos del formulario
        const nombre = $('#productoNombre').val();
        const categoria = $('#productoCategoria').val();
        const precio = $('#productoPrecio').val();
        const imagen = $('#productoImagen')[0].files[0];
        
        // Validación básica
        if (!nombre || !categoria || !precio) {
            alert('Por favor, complete todos los campos obligatorios.');
            return;
        }

        // Aquí se debería enviar los datos al servidor para guardar los cambios
        // Ejemplo de cómo se podría hacer una solicitud con jQuery AJAX
        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('categoria', categoria);
        formData.append('precio', precio);
        if (imagen) {
            formData.append('imagen', imagen);
        }

        $.ajax({
            url: '/admin/modificar-producto', // Cambia esta URL a la del endpoint correspondiente
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function(response) {
                alert('Producto modificado con éxito.');
                $('#modificarProductoForm')[0].reset();
            },
            error: function(xhr, status, error) {
                alert('Error al modificar el producto. Inténtalo de nuevo.');
            }
        });
    });

    // Funcionalidad para eliminar un producto (en la vista de productos)
    $('.btn-eliminar').on('click', function() {
        const productoId = $(this).data('id');
        
        if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
            $.ajax({
                url: `/admin/eliminar-producto/${productoId}`, // Cambia esta URL a la del endpoint correspondiente
                type: 'DELETE',
                success: function(response) {
                    alert('Producto eliminado con éxito.');
                    location.reload(); // Recarga la página para reflejar los cambios
                },
                error: function(xhr, status, error) {
                    alert('Error al eliminar el producto. Inténtalo de nuevo.');
                }
            });
        }
    });
});
