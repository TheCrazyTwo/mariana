document.addEventListener("DOMContentLoaded", function() {
    const comentarioInput = document.getElementById("comentario");
    const imagenInput = document.getElementById("imagen");
    const enviarButton = document.getElementById("enviar");

    enviarButton.addEventListener("click", function() {
        const comentario = comentarioInput.value;
        const imagen = imagenInput.files[0]; // Obtiene el archivo de imagen seleccionado

        // Realiza alguna acción con el comentario y la imagen, como enviarlos a un servidor
        console.log("Comentario:", comentario);
        console.log("Imagen:", imagen);

        // Limpia los campos después de enviar
        comentarioInput.value = "";
        imagenInput.value = null;
    });
});
