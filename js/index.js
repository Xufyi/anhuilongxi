var $imgs = $('.banner .imgs ul li')
//小圆点
var $circles = $('.circles li')
var $banner = $('.banner')
//信号量
var idx = 0;

// // 新闻部分
var $newList = $('.newList') 
var idx_new = 0
console.log($newList)
var $right = $('.to_right') 
var $left = $('.to_left') 
var lock = true


// 定时轮播
setInterval(newBanner,2000)
//点击事件
$right.on('click',newBanner)
	
function newBanner(){

	if(!lock){
		return
	}
	lock = false
	idx_new ++;
	if(idx_new > 2){
		//如果时最后一个，瞬间回到第一个
		idx_new = 0
		$newList.css({top:idx_new})
	}
	$newList.animate({top: -idx_new *17 },1000,function(){
		lock = true
	})
}



// 轮播图下一张
function change(){
	idx ++ 
	if(idx>$imgs.length){
		idx = 0
	}
	$imgs.fadeOut(600)
	$imgs.eq(idx).stop(true).fadeIn(600)

	//小圆点跟着改变
	$circles.eq(idx).addClass("cur").siblings().removeClass("cur");	
}
var timer = setInterval(change,2000);


// //鼠标覆盖，轮播图停止
$banner.mouseenter(function(){
	clearInterval(timer)
})
$banner.mouseleave(function(){
	clearInterval(timer)
	timer = setInterval(change,2000);
})
//小圆点事件
$circles.mouseenter(function(){
	$imgs.eq(idx).stop().fadeOut();
	idx = $(this).index();
	$imgs.eq(idx).stop().fadeIn()
	$circles.eq(idx).addClass('cur').siblings().removeClass('cur')
})


