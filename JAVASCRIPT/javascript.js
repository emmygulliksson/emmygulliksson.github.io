
$(window).on("scroll", function() {
   if ($(this).scrollTop() > 10) {
     $("header").css("background","rgb(178, 176, 154, 0.2)");
      
   }
   else {
      $("header").css("background","none");
   }
});



$(document).ready(function(){
    $(".box-img-left").mouseenter(function() {
        $('.inner-box-left').stop().fadeIn(300);
        $(".inner-box-left").css("display","grid");
    });
    
    $(".box-img-left, .inner-box-left").mouseleave(function() {
      if(!$('.inner-box-left').is(':hover')){
        $('.inner-box-left').fadeOut(300);
      };
    });
    $(".box-img-right").mouseenter(function() {
        $('.inner-box-right').stop().fadeIn(300);
        $(".inner-box-right").css("display","grid");
    });
    
    $(".box-img-right, .inner-box-right").mouseleave(function() {
      if(!$('.inner-box-right').is(':hover')){
        $('.inner-box-right').fadeOut(300);
      };
    });
});


