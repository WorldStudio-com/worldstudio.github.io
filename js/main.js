var x = document.getElementById("Copyright");
x.innerHTML = "WStudio©2022";
//友链
var f_l = document.getElementById("friend_link");
f_l.href = "index.html";
//使用条款
var termsForUsage = document.getElementById("termsForUsage");
termsForUsage.href = "termsForUsage.html";
//地图
var map = document.getElementById("map");
map.href = "https://m.amap.com/";
//关于
var about = document.getElementById("about");
about.href = "";
//修改footer
function footer_(){
	var h = document.getElementById("b_box").scrollHeight;
	document.getElementById("footer_").style.height = h + "px";
}
footer_();
//官网
function oW(){
	window.location.replace('index.html');
}
//收藏本站
function AddFavorite(){
	var title = "WStudio";
	var url = "#";
	try{
		window.external.addFavorite(url, title);
	}
	catch (e){
		try{
			window.sidebar.addPanel(title, url, "");
		}
		catch (e){
			alert("抱歉，您所使用的浏览器无法完成此操作.\n\n加入收藏失败，请使用Ctrl+D进行添加或手动添加.");
		}
	}
}

function ppx(){
	var w = window.screen.width;
	var h = window.screen.height;
	//alert(w + ":" + h);
	
	if (w <= 395){
		document.getElementsByTagName('body')[0].style.zoom=0.8;
	}else{
    document.getElementsByTagName('body')[0].style.zoom=1;
}
}

// 禁用双击放大
var lastTouchEnd = 0;
document.documentElement.addEventListener('touchend', function (event) {
	var now = Date.now();
	if (now - lastTouchEnd <= 300) {
		event.preventDefault();
	}
	lastTouchEnd = now;
}, {
	passive: false
 
});
ppx();
//网页鼠标点击特效
(function (){
	var a_idx = 0;
	window.onclick = function (event){
		var a = new Array("WS");
		var heart = document.createElement("b");
		//创建b元素
		heart.onselectstart = new Function('event.returnValue=false');
		//防止拖动
		document.body.appendChild(heart).innerHTML = a[a_idx];
		//将b元素添加到页面上
		a_idx = (a_idx + 1) % a.length;
		heart.style.cssText = "position: fixed;left:-100%;";
		//给p元素设置样式
		var f = 16,
		// 字体大小
		x = event.clientX - f / 2,
		// 横坐标
		y = event.clientY - f,
		// 纵坐标
		c = randomColor(),
		// 随机颜色
		a = 1,
		// 透明度
		s = 1.2;
		// 放大缩小
		var timer = setInterval(function (){
			//添加定时器
			if (a <= 0){
				document.body.removeChild(heart);
				clearInterval(timer);
			}
			else{
				heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" + c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" + s + ");";
				y--;
				a -= 0.016;
				s += 0.002;
			}
		}
	, 15)}
	// 随机颜色
	function randomColor(){
		return "rgba(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + 180 + ")";
	}
}
());
//文字选中
document.body.onselectstart = function(){
	　　return false;
}
