//Переключение табов

$(document).ready(function () {      
    $(document).on('click', '.erp-container-tabs-item', function () { 
      var tab_index = $(this).index();           
      if($(this).hasClass('active')) {                   
      } else {
        $(".erp-container-tabs-item").each(function(){
          $(this).removeClass('active');
          $(document).find('.erp-container-content-text').eq($(this).index()).css('display', 'none');
        });
        $(this).addClass('active');        
        $(document).find('.erp-container-content-text').eq(tab_index).fadeIn('slow');
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