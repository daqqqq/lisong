require(['config'],function(){
	require(['jquery','slideshow'],function(){
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


	})
})