$(document).ready(function() {

    // Obtener y mostrar la cantidad de capas creadas usando el método size()
    const numeroDeCapas = $('.capa').size(); // size() en jQuery 1.x
    alert(`Número de capas creadas: ${numeroDeCapas}`);

    // Cambiar el color de texto de todas las capas a verde
    $('.capa').css('color', 'green');
});