var content_1 = document.querySelector(".content-1");
var content_2 = document.querySelector(".content-2");
var bodyH = document.body.clientHeight; //拿到屏幕可见高度
var nav = document.querySelector("nav");		
var loops = $("canvas");
var ps = loops.next();
var a = true;
window.onscroll = function(){
	var _top = content_1.offsetTop - window.scrollY; //content1 距离上边框的距离	
	var top_ = content_2.offsetTop - window.scrollY;
	if (_top <= 0){
		nav.style.position = "fixed";
		nav.style.top = 0;
	}else{				
		nav.style.position = "";	
	}
	if (top_ < (bodyH - 150) && a){
		var arr = [90,80,80,75,75,100]
		loops.map(function(key,val){
			yh(arr[key],val,ps[key]);	
		})
		a = false;
	}
}


$('.goto').click(function (){
	$('html,body').animate({
		scrollTop:$($.attr(this,'href')).offset().top
	},600)
	return false;
})


function yh(num,div,p){
	var ctx = div.getContext("2d");
	var _num = num / 100 * 360;
	var index = 0 ;
	ctx.lineWidth = 15;
	ctx.strokeStyle = "#e74c3c";
	var sid = setInterval(function(){
		if (_num <= index){
			clearInterval(sid);
		}else{
			ctx.clearRect(0,0,400,400);
			ctx.beginPath();
			ctx.arc(100,100,80,Math.PI/180 * -91,Math.PI/180 * (index - 90),false);
			ctx.stroke();
			index++
			p.textContent = ~~(index / 360 * 100) + '%';
		}
	},1000/180);
}
