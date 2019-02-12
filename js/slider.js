var page = 1;
var serpage = 1;
var target = $('.whysite-screen');
var targetSer = $('.service-screen');
var targetPos = target.offset().top;
var targetPosSer = targetSer.offset().top;
var winHeight = $(window).height();
var winHeightSer = $(window).height();
var scrollToElem = targetPos - winHeight;
var scrollToElemSer = targetPosSer - winHeightSer;
var isScroll = false;
var isScrollSer = false;
$(window).scroll(function(){
  var winScrollTop = $(this).scrollTop();
  if(winScrollTop > scrollToElem){
    	isScroll = true;
  }
});
$(window).scroll(function(){
  var winScrollTopSer = $(this).scrollTop();
  if(winScrollTopSer > scrollToElemSer){
    	isScrollSer = true;
  }
});

var timerId = setInterval(function() {
	if(isScroll==true){
		if(page == 10){
			$('.slide9').css('display', 'none');
			page = 1;
		}
		$('.slide'+ (page-1)).css('display', 'none');
		$('.slide'+(page++)).css('display', 'block');
	}
}, 3000);

var timerIdSer = setInterval(function() {
	if(isScrollSer==true){
		if(serpage == 8){
			$('.service-info7').css('display', 'none');
			serpage = 1;
		}
		$('.service-info'+ (serpage-1)).css('display', 'none');
		$('.service-info'+(serpage)).css('display', 'block');
		$('.service-img').attr('src', 'img/serimg'+serpage+'.jpg');
		serpage++;

	}
}, 3000);
