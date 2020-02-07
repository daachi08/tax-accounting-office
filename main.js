$(function() {
  jQuery('.icon-hamburger').on('click', function() {
    if(jQuery(this).hasClass('active')) {
      jQuery(this).removeClass('active');
      jQuery('.menu-container .menu').slideUp('1500');
    }else {
      jQuery(this).addClass('active');
      jQuery('.menu-container .menu').slideDown('1500');
      

    }
  });
});

 //指定のリンクへスクロール
  
 $(function(){
  $('a[href^="#"]').click(function(){
    var adjust = -100; //高さ調整
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});


//スティッキヘッダーの実装
$(function() {
$('.global-nav').each(function() {
  var $window = $(window)
      $header = $(this)
      headerOffsetTop = $header.offset().top;
$window.on('scroll', function(){
if ($window.scrollTop() > headerOffsetTop ){  
    $header.addClass('sticky');
  }
  else{
    $header.removeClass('sticky');
  }
});
$window.trigger('scroll');
});
});


