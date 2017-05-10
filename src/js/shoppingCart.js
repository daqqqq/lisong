require(['config'],function(){
	require(['jquery','gfdzoom'],function(){
		$('header').load('../html/header.html');
		$('footer').load('../html/footer.html');
		$('.shopp_zoom').gdszoom({
				position:'right',
			});

			$('.listsm').on('mouseenter','img',function(){
				$('.shopp_zoom img').attr({
					src:this.src,
					'data-big':this.src,

				});
			})
	})
})