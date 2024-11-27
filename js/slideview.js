$(document).ready(function(){

	$(window).on('scroll', function() {

    $('.sobre-um, .sobre-dois').each(function() {
      var elementOffset = $(this).offset().top;
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scrollTop + windowHeight > elementOffset + 100) {
        $(this).addClass('in-view');
      }
    });

     $('.facilidades-single').each(function(index) {
      var elementOffset = $(this).offset().top;
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scrollTop + windowHeight > elementOffset + 50) {
        if ($(window).width() < 890) {
          /* Mobile: Anima uma div por vez com atraso */
          $(this).delay(index * 200).queue(function(next) {
            $(this).addClass('up-view');
            next();
          });
        } else {
          /* Desktop: Anima todas ao mesmo tempo */
          $('.facilidades-single').addClass('up-view');
        }
      }
    });

  });

	function animateDivs(){
    $('.servicos-single').each(function(index) {
      var elementOffset = $(this).offset().top;
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scrollTop + windowHeight > elementOffset + 50) {
        if ($(window).width() < 890) {
          /* Mobile: Anima uma div por vez com atraso */
          $(this).delay(index * 200).queue(function(next) {
            $(this).addClass('up-view');
            next();
          });
        } else {
          /* Desktop: Anima todas ao mesmo tempo */
          $('.servicos-single').addClass('up-view');
        }
      }
    });
  }

  $(window).on('scroll resize', animateDivs);
  animateDivs(); // Verifica ao carregar a página

	
});