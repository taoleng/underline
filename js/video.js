~(function(){
	var sitem=$(".servier_items").find(".servier_item");
	var mask=$(".mask");
	var pop=$(".pop_video");
	var vw=$(".pop_video");
	var v=vw.find("video");
	$(document).on('click','.pop_close',function(){
		mask.hide(),pop.hide();
		v.get(0).pause();
	})
	sitem.on('click',function(){
		vw.show(),
		mask.show();
		var src=sitem.eq($(this).index()).attr("data-src")
		v.attr("src",src);
		v.get(0).play();
	})

})();