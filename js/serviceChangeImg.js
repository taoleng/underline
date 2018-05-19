~(function(){
	var sitem=$(".servier_items").find(".servier_item");
	var mask=$(".mask");
	var pop=$(".pop");
	var change=$(".changeImg");
	var n=0;
	$(document).on('click','.pop_close',function(){
		mask.hide(),pop.hide()
	})
	$(document).on('click','.slide_prev',function(){
		var li=change.find("li")
		n--;
		n%=li.length;
		li.removeClass("on")
		li.eq(n).addClass("on")
	})
	$(document).on('click','.slide_next',function(){
		var li=change.find("li")
		n++;
		n%=li.length;
		li.removeClass("on")
		li.eq(n).addClass("on")
	})
	sitem.click(function(){
		mask.show(),pop.show();
		var t=$(this).index();
		var p=$(".servier_items").find(".servier_item").find("img")
		initData(p,t)
		n=t
	})
	function initData(obj,index){
		change.html('')
		var str='';
		for(var i=0;i<obj.length;i++){
			var im=obj[i].src
			str+='<li><img src="'+im+'" style="max-height:800px"/></li>'
		}
		change.html(str)
		change.find("li").eq(index).addClass("on")
	}
})();