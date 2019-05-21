//Переключение табов

$(document).ready(function () {      
    $(document).on('click', '.erp-container-tabs-item', function () { 
      var tab_index = $(this).index();           
      if($(this).hasClass('active')) {                   
      } else {
        $(".erp-container-tabs-item").each(function(){
          $(this).removeClass('active');
          $(document).find('.erp-container-content-text-item').eq($(this).index()).css('display', 'none');
        });
        $(this).addClass('active');        
        $(document).find('.erp-container-content-text-item').eq(tab_index).fadeIn(1800);
        console.log(tab_index);
        if(tab_index == 0) {
          $(document).find('.erp-container-content-graphics-erp').addClass('slide1').removeClass('slide2').removeClass('slide3').removeClass('slide4');
          $(document).find('.erp-container-content-graphics-star').addClass('slide1').removeClass('slide2').removeClass('slide3').removeClass('slide4');
          $(document).find('.erp-container-content-graphics-ddm').addClass('slide1').removeClass('slide2').removeClass('slide3').removeClass('slide4');
          $(document).find('.erp-container-content-graphics-business').addClass('slide1').removeClass('slide2').removeClass('slide3').removeClass('slide4');
        }
        if(tab_index == 1) {
          $(document).find('.erp-container-content-graphics-erp').addClass('slide2').removeClass('slide1').removeClass('slide3').removeClass('slide4');
          $(document).find('.erp-container-content-graphics-star').addClass('slide2').removeClass('slide1').removeClass('slide3').removeClass('slide4');
          $(document).find('.erp-container-content-graphics-ddm').addClass('slide2').removeClass('slide1').removeClass('slide3').removeClass('slide4'); 
          $(document).find('.erp-container-content-graphics-business').addClass('slide2').removeClass('slide1').removeClass('slide3').removeClass('slide4');       
        }
        if(tab_index == 2) {
          $(document).find('.erp-container-content-graphics-erp').addClass('slide3').removeClass('slide1').removeClass('slide2').removeClass('slide4');
          $(document).find('.erp-container-content-graphics-star').addClass('slide3').removeClass('slide1').removeClass('slide2').removeClass('slide4');
          $(document).find('.erp-container-content-graphics-ddm').addClass('slide3').removeClass('slide1').removeClass('slide2').removeClass('slide4'); 
          $(document).find('.erp-container-content-graphics-business').addClass('slide3').removeClass('slide1').removeClass('slide2').removeClass('slide4');       
        }
        if(tab_index == 3) {
          $(document).find('.erp-container-content-graphics-erp').addClass('slide4').removeClass('slide1').removeClass('slide2').removeClass('slide3');
          $(document).find('.erp-container-content-graphics-star').addClass('slide4').removeClass('slide1').removeClass('slide2').removeClass('slide3');
          $(document).find('.erp-container-content-graphics-ddm').addClass('slide4').removeClass('slide1').removeClass('slide2').removeClass('slide3'); 
          $(document).find('.erp-container-content-graphics-business').addClass('slide4').removeClass('slide1').removeClass('slide2').removeClass('slide3');       
        }
      }
    });
});

$(document).ready(function() {
  $('.minicase-block-slider').slick({
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          vertical: false,
          slidesToShow: 3,
          slidesToScroll: 1
        }        
      },
      {
        breakpoint: 425,
        settings: {
          vertical: false,
          slidesToShow: 2,
          slidesToScroll: 1
        }        
      }      
    ]
  });
});