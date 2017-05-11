require(['config'],function(){
	require(['jquery','gfdzoom','shopcar'],function(){
		$('header').load('../html/header.html');
		$('footer').load('../html/footer.html');
		// 放大镜效果
		$('.shopp_zoom').gdszoom({
				position:'right',
			});
			$('.listsm').on('mouseenter','img',function(){
				$('.shopp_zoom img').attr({
					src:this.src,
					'data-big':this.src,

				});
			})
			// 购物车飞入
			$('.add_car').on('click', addCart);
				function addCart(event) {
					var offset = $('#end').offset(), flyer = $('<img class="u-flyer" src="../img/shoppingCart/big1.jpg"/>');
					flyer.fly({
					    start: {
					        left: event.clientX-10,
					        top: event.clientY-10
					    },
					    end: {
					        left: offset.left,
					        top: offset.top-scrollY,
					        width: 0,
					        height: 0
					    }
					});
				}
	})
})