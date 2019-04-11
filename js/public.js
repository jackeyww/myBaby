var pixelRatio = 1 / window.devicePixelRatio; //还原设备的真实分辨率；  
//devicePixelRatio设备的像素比；     
document.write('<meta name="viewport" content="width=device-width,initial-scale=' + pixelRatio + ',minimum-scale=' + pixelRatio + ',maximum-scale=' + pixelRatio + '" />');
var html = document.getElementsByTagName('html')[0];
var pageWidth = html.getBoundingClientRect().width;
html.style.fontSize = pageWidth / 10 + "px";

window.onscroll = function () {

	var toTop = document.getElementsByClassName('to-top')[0];
	var allBrand = document.getElementsByClassName('allBrand')[0];
	var scroll = new getScrollOffset();
	// console.log(scroll.y);
	var transX = parseInt($('.to-top').css("width")) + parseInt($('.to-top').css("right"));
	if (scroll.y > 800) {
		if (toTop) {
			toTop.style.transform = "translateX(0px)";
		}
		if (allBrand) {
			allBrand.style.transform = "translateX(" + (-transX) + "px)";
		}
	} else {
		if (toTop) {
			toTop.style.transform = "translateX(" + transX + "px)";
		}
		if (allBrand) {
			allBrand.style.transform = "translateX(0px)";
		}
	}
	if (toTop) {
		toTop.onclick = function () {
			$("html,body").animate({
				scrollTop: $('body').offset().top
			}, 500);
		}
	}

}

function getScrollOffset() {
	if (window.pageXOffset) {
		return {
			x: window.pageXOffset,
			y: window.pageYOffset,
		}
	} else {
		return {
			x: document.body.scrollLeft + document.documentElement.scrollLeft,
			y: document.body.scrollTop + document.documentElement.scrollTop,
		}
	}
}