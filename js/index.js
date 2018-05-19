$(".top_nav_menu .top_li").hover(function(){
	$(this).find(".hidemenu").stop().slideDown(300)
},function(){
	$(this).find(".hidemenu").stop().slideUp(300)
})

//顶部定位
var topNav=$(".topNav");
var Navtop=topNav.offset().top;
$(window).scroll(function(){
	var top=$(this).scrollTop();
	top > Navtop ? topNav.find(".top_nav").addClass("fixed") : topNav.find(".top_nav").removeClass("fixed");
})
