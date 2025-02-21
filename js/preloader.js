$(document).ready(function () {
    // Exibe o preloader assim que a página começa a carregar
    $('#preloader').show();
    //$('body').css('overflow', 'hidden'); // Evita rolagem enquanto o site carrega

    // Aguarda a página carregar completamente
    $(window).on('load', function () {
        esconderPreloader(); // Chama a função que oculta o preloader
    });

    // Caso o evento 'load' não seja disparado, garante que o preloader desapareça após um tempo máximo
    setTimeout(function () {
        esconderPreloader();
    }, 5000); // Tempo máximo de espera (5 segundos)
});

// Função para esconder o preloader
function esconderPreloader() {
    if ($('#preloader').is(':visible')) {
        $('#preloader').fadeOut(500, function () {
            $(this).remove(); // Remove o preloader do DOM
            $('body').css('overflow', 'auto'); // Libera a rolagem do site
        });
    }
}