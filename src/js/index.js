require(['config'],function(){
	require(['jquery','slideshow','lazy'],function(){
		//引入头部与尾巴样式
		$('header').load('html/header.html',function(){
			$('header img').each(function(index,ele){
					// $(this).attr('src','../'+($(this).attr('src')));
					$(this).attr('src',($(this).attr('src')).substr(3));
			})
		});

		$('footer').load('html/footer.html',function(){
			$('footer img').each(function(index,ele){
					// $(this).attr('src','../'+($(this).attr('src')));
					$(this).attr('src',($(this).attr('src')).substr(3));
			})
		});
		// 轮播图
		$('.index_tu').lxcarousel({
				imgs:['img/indexbanner1.jpg','img/indexbanner2.jpg','img/indexbanner3.jpg',
				'img/indexbanner4.jpg','img/indexbanner5.jpg',
				'img/indexbanner6.jpg','img/indexbanner7.jpg'],
				height:453,
		});

		// 懒加载
		$("img").lazyload({effect: "fadeIn"});

		// 楼层效果
		 // var oNav = $('.lef'); //导航壳
   //          var aNav = oNav.find('li'); //导航
   //          var aDiv = $('#louceng'); //楼层
   //          var oTop = $('.goTop'); //回到顶部 
   //          $(window).scroll(function() {
   //                  //可视窗口高度
   //                  var winH = $(window).height();
   //                  //鼠标滚动的距离
   //                  var iTop = $(window).scrollTop();

   //                  if(iTop >= $("#louceng").height()) {
   //                      oNav.fadeIn();
   //                      oTop.fadeIn();
   //                      //鼠标滑动样式改变
   //                      aDiv.each(function() {
   //                          if(winH + iTop - $(this).offset().top > winH / 2) {
   //                              aNav.removeClass('active');
   //                              aNav.eq($(this).index()).addClass('active');
   //                          }
   //                      })
   //                  } else {
   //                      oNav.fadeOut();
   //                      oTop.fadeOut();
   //                  }
   //              })
   //          //点击回到当前楼层
   //          aNav.click(function() {
   //              var t = aDiv.eq($(this).index()).offset().top;
   //              $('body,html').animate({
   //                  "scrollTop": t
   //              }, 500);
   //              $(this).addClass('active').siblings().removeClass('active');
   //          });
   //          //回到顶部
   //          oTop.click(function() {
   //              $('body,html').animate({
   //                  "scrollTop": 0
   //              }, 500)
   //          })
	})
})