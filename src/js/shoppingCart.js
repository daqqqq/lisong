require(['config'],function(){
	require(['jquery','gfdzoom','shopcar','com'],function(){
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
			// 点击按扭弹出购物车
			$('.add_car').on('click',function(){
				$('.shop_opp').css('display','block');
			});
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
				   	// onend:{
				    // 	$('.add_car').remove('flyer');
				    // }
				}


			// 点击按钮，加减一
			$(function(){  
			    var t = $(".btn_num");  
			    $(".btn_sum").click(function(){  
			        t.val(parseInt(t.val())+1); 
			         //当按加1时，解除-不可读状态 
			        $(".btn_reduce").removeAttr("disabled");                  
			    })  
			    $(".btn_reduce").click(function(){  
			    			//判断数量值大于1时才可以减少
			               if (parseInt(t.val())>1) {                       
			                t.val(parseInt(t.val())-1)  
			                }else{  
			                //当$-为1时，$-不可读状态  
			                $("btn_reduce").attr("disabled","disabled")     
			               }  
			    })  
			     
			}) 


			// cookie的读取
				// cookie数据的存储
			// 获取商品的图片
			var $img=$('.shop_cookie');
			//获取商品名字
			var $name=$('.lisri_name');
			//获取商品的价格
			var $price=$('.cont_pices');

			var $prices=$price.text();
		
			var carlist=getCookie('carlist')

			carlist = carlist ? JSON.parse(carlist) : [];

			$('.add_car').click(function(){	
				var hasGood=false;
				console.log($prices)
				for(var i=0;i<carlist.length;i++){
					if (carlist[i].price== $prices){
						console.log(carlist[i])
						hasGood = true;
						carlist[i].qty++;
						break;
						
					}
				}
				// $(carlist).each(function(idx,item){
				// 	if(item.price==$prices){
				// 		hasGoods = true;
				// 		console.log(22)
				// 		$(carlist)[0].qty++;
				// 	}
				// })
				if (hasGood ==false){
					var goods={
						imgUrl:$img.attr('src'),
						name:$name.text(),
						price:$price.text(),
						qty:1
					}	
					carlist.push(goods)
				}
				console.log($name.text());
				console.log(carlist)
				setCookie('carlist',JSON.stringify(carlist));
			})

			
	})
})