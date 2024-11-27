$(document).ready(function(){
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav' // Conecta com o slider de navegação
  });

  $('.slider-nav').slick({
    slidesToShow: 7,   // Exibir 3 miniaturas por vez
    slidesToScroll: 1,
    asNavFor: '.slider-for', // Conecta com o slider principal
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    responsive:[
          {
            breakpoint: 990,
            settings:{
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 870,
            settings:{
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 768,
            settings:{
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 640,
            settings:{
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 490,
            settings:{
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 440,
            settings:{
              slidesToShow: 2,
            }
          }
        ]
  });
  $('.slider-nav').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    // Remove a classe 'slick-current' de todas as miniaturas
    $('.slider-nav .slick-slide img').removeClass('selected');

    // Adiciona a classe 'selected' na miniatura ativa
    $('.slider-nav .slick-slide[data-slick-index="' + nextSlide + '"] img').addClass('selected');
  });

  $('.slick-next').html('<i class="fa-solid fa-circle-right"></i>');
  $('.slick-prev').html('<i class="fa-solid fa-circle-left"></i>');

  
});