

window.onload = function(){
 	var classifyMenu = document.getElementsByClassName('classifyMenu')[0];
 	var menuItems = classifyMenu.getElementsByTagName('a');
 	var currentItems = classifyMenu.getElementsByTagName('span');
 	var classifyPages = document.getElementsByClassName('classifyPublicPage');

 	for (var i = 0; i < menuItems.length; i++) {
 		menuItems[i].onclick = function(e){
 			var e = e || window.event;
 			for (var j = 0; j < menuItems.length; j++) {
 				if(e.target == menuItems[j] || e.target == currentItems[j]){
 					classifyPages[j].style.display = "block";
 					currentItems[j].className = "active";
 					window.scroll(0,0);
 				}else{
 					classifyPages[j].style.display = "none";
 					currentItems[j].className = "";
 				}
 			}
 		}
 	}
 	var btClassify = document.getElementsByClassName('classifyCard')[0];
 	var classifyPage = document.getElementsByClassName('classifyPage')[0];
 	var brandMenu = document.getElementsByClassName('brandMenu')[0];
    var brandPage = document.getElementsByClassName('brandPage')[0];
 	var btBrand = document.getElementsByClassName('brandCard')[0];
 	var btAllBrand = document.getElementsByClassName('allBrand')[0];

 	btClassify.onclick = function(){
 		btClassify.style.color = "#EE5D58";
 		btBrand.style.color = "#333";
 		classifyPage.style.display = "block";
 		classifyMenu.style.display = "block";
 		brandMenu.style.display = "none";
 		brandPage.style.display = "none";
 		btAllBrand.style.display = "none";
 	}
 	btBrand.onclick = function(){
 		classifyPage.style.display = "none";
 		classifyMenu.style.display = "none";
 		brandMenu.style.display = "block";
 		brandPage.style.display = "block";
 		btBrand.style.color = "#EE5D58";
 		btClassify.style.color = "#333";
 		btAllBrand.style.display = "block";
 	}
 	var scrollMenu = document.getElementById('brandScrollMenu');
 	var brandMenuItems = scrollMenu.getElementsByTagName('a');
 	var currentBrandItems = scrollMenu.getElementsByTagName('span');
 	var tags = document.getElementsByClassName('tag');
 	for(var i=0;i<brandMenuItems.length;i++){
 		brandMenuItems[i].onclick = function(e){
 			for(var j=0;j<brandMenuItems.length;j++){
 				if(e.target == brandMenuItems[j] || e.target == currentBrandItems[j]){
 					currentBrandItems[j].className = "active";
 					switch (j){
 						case 0:
 							goToTarget($(".tag1"));
 						break;
 						case 1:
 							goToTarget($(".tag2"));
 						break;
 						case 2:
 							goToTarget($(".tag3"));
 						break;
 						case 3:
 							goToTarget($(".tag4"));
 						break;
 						case 4:
 							goToTarget($(".tag5"));
 						break;
 						default:
 						break;
 					}
 				}else{
 					currentBrandItems[j].className = "";
 				}
 			}
 		}
 	}
}
		function goToTarget(tag){
			$("html,body").animate({scrollTop: tag.offset().top}, 500);
		}
		var wSize = new getViewportOffset();
		// window.onscroll = function(){
		// 	var scrollMenu = document.getElementById('brandScrollMenu');
		// 	scrollMenu.style.transform = "translateX("+getMenuTrans()+"px)";
		// }

		function getMenuTrans(){
			var scrollMenu = document.getElementById('brandScrollMenu');
			// 滚动条滚动最大距离 = 屏幕总高 - 一个屏幕的距离
			var scrollY = document.body.scrollHeight - wSize.h;
			// 滚动菜单滚动的距离 = 菜单总宽度 - 屏幕宽度
			var scrollMenuWidth = parseInt($('.menuContain').css("width"));
			var menuScrollOffset = scrollMenuWidth - document.body.scrollWidth;
			//窗口滚动条和水平滚动菜单滚动距离之间的倍数
			var multiple = scrollY / menuScrollOffset;
			var wScroll = new getScrolloff();
			var menuTrans = -(wScroll.y / multiple);
			return menuTrans;
		}

		function getScrolloff(){
			if(window.pageXOffset){
				return{
					x : window.pageXOffset,
					y : window.pageYOffset,
				}
			}else{
				return{
					x : document.body.scrollLeft + document.documentElement.scrollLeft,
					y : document.body.scrollTop + document.documentElement.scrollTop,
				}
			}
		}

		function getViewportOffset(){
			if(window.innerHeight){
				return{
					w : window.innerWidth,
					h : window.innerHeight
				}
			}else if(document.compatMode == "BackCompat"){
				return{
					w : document.body.clientWidth,
					h : document.body.clientHeight
				}
			}else{
				return{
					w : document.documentElement.clientWidth,
					h : document.documentElement.clientHeight
				}
			}
		}