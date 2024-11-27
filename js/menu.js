$(document).ready(function(){

	var bannerHeight = $('#home').outerHeight();
	var menuHeight = $('#cabecalho').outerHeight();

	$(window).scroll(function(){

		var scrollPosition = $(this).scrollTop();

		if (scrollPosition >= bannerHeight) {
            $('#cabecalho').addClass('fixed').css('top', '0');
        } else {
            // Se a rolagem estiver antes do banner, o cabeçalho desaparece
            $('#cabecalho').removeClass('fixed').css('top', '-100px');
        }

	});

	$('.menu-mobile-icone').click(function(e){
		e.stopPropagation();
		if($('.menu-mobile-nav').is(':visible')){
			//$('.img-desktop').fadeIn();
			$('.menu-mobile-icone i').removeClass('fa-rectangle-xmark');
			$('.menu-mobile-icone i').addClass('fa-bars');
			console.log('escondido');
			$('.btn-desktop').fadeIn(1000, function() {
			  $(this).css('display', 'inline-block');
			});
			$('.btn-mobile').fadeOut(1000, function(){
				$(this).css('display','none');
			});
		}else{
			//$('.img-desktop').hide();
			$('.menu-mobile-icone i').addClass(' fa-rectangle-xmark');
			$('.menu-mobile-icone i').removeClass('fa-bars');
			console.log('aberto');
			$('.btn-desktop').fadeOut(1000, function() {
			  $(this).css('display', 'none');
			});
			$('.btn-mobile').fadeIn(1000, function(){
				$(this).css('display','block');
			});
		}
		$('.menu-mobile-nav').slideToggle();
	});

	$('body,a').click(function(e){
		e.stopPropagation();
		$('.menu-mobile-nav').slideUp();
		$('.menu-mobile-icone i').removeClass('fa-rectangle-xmark');
		$('.menu-mobile-icone i').addClass('fa-bars');
		//$('.menu-mobile-icone i').className('fa-solid fa-bars');
		$('.btn-desktop').fadeIn(1000, function() {
		  $(this).css('display', 'inline-block');
		});
		$('.btn-mobile').fadeOut(1000, function(){
			$(this).css('display','none');
		});
		//$('.icone-menu').css('background-image','');
	});


	$('nav a,.btn-chamada:not(.btn-meus-agendamentos) a,.btn-scroll, .logo a').click(function(){
		var href = $(this).attr('href');
		var slide = $(href).offset().top - menuHeight;

		$('html,body').animate({'scrollTop':slide});

		return false;
	});

	$('.faq-question').on('click', function () {
	    // Toggle a resposta
	    const answer = $(this).next(".faq-answer");
	    const icon = $(this).find(".faq-icon");
	    
	    // Expandir ou recolher a resposta
	    answer.slideToggle();

	    // Alternar o ícone "+" e "-"
	    if (icon.text() === "+") {
	      icon.text("-");
	    } else {
	      icon.text("+");
	    }

	    // Fechar outras respostas abertas
	    $(".faq-answer").not(answer).slideUp();
	    $(".faq-icon").not(icon).text("+");
	  });

})