require(['config'],function(){
	require(['jquery','addcont','com'],function(){
			$(function() {
					totl();
					adddel()
						//全选
					$("#all").click(function() {
							all = $(this).prop("checked")
							$(".Each").each(function() {
								$(this).prop("checked", all);
							})
						})
						//删除当前行
					$(".del").each(function() {
							$(this).click(function() {
								$(this).parent().remove();
								if($(".imfor").length == 0) {
									$("#susum").text(0);
								}
								totl();
							})
						})

				//全选删除										
					$(".foot_del").click(function() {
						$(".Each").each(function() {
							if($(this).prop('checked')) {
								$(this).parents(".imfor").remove();
								totl();
								if($(".imfor").length == 0) {
									$("#susum").text(0);
								}
							}
						})

					})

				})
				//合计
			function totl() {
				var sum = 0;
				$(".totle").each(function() {
					sum += parseFloat($(this).text());
					console.log(sum);
					$("#susum").text(sum);

				})
			}
			function adddel(){
				//小计和加减
					//加
					$(".add").each(function() {
							$(this).click(function() {
								console.log($(this))
								var $multi	 = 0;
								var vall = $(this).prev().val();
								vall++;
								$(this).prev().val(vall);
								$multi = parseFloat(vall) * parseFloat($(this).parent().prev().text());
								$(this).parent().next().text(Math.round($multi));
								totl();
							})

						})
						//减
					$(".reduc").each(function() {
							$(this).click(function() {
								var $multi1 = 0;
								var vall1 = $(this).next().val();
								vall1--;
								if(vall1 <= 0) {
									vall1 = 1;
								}
								$(this).next().val(vall1);
								$multi1 = parseFloat(vall1) * parseFloat($(this).parent().prev().text());
								$(this).parent().next().text(Math.round($multi1));
								totl();
							})

						})
			}
		// 拿到cookie
		var goodlist=getCookie('carlist')

			goodlist=goodlist ? JSON.parse(goodlist):[];
			console.log(goodlist)

			// jq创建一个UL和总价
			var $imforTop=$('<div/>');
			 $imforTop.addClass('imfor');

			var tprice=0;

			//在div.infor中写入cookies；
			
			$imforTop.html(goodlist.map(function(item){
				tprice+=item.price*item.qty;
				console.log(tprice)
			// 	return '<li><img src="'+item.imgUrl+'"></li><li><h4>'+item.name+'</h4></li><li>
			// 	<p class="price">'+'￥'+item.price+'</p></li><li>'+item.qty+'</li><li>'+'￥'+tprice+'</li>';
			// }).join(''));
			return '<div class="check"><input type="checkbox" class="Each"/></div><div class="pudc"><img src="'+item.imgUrl+'"></div><div class="pices">'+item.price+'</div><div class="num"><span class="reduc">&nbsp;-&nbsp;</span><input type="text" value="'+item.qty+'" class="text_num" /><span class="add">&nbsp;+</span></div><div class="totle">'+tprice+'</div><div class="del">删除</div></div>';
			 		}).join(''));
			console.log($imforTop)
			//ul写进DIV中 price写进sub中
			$('#content_box').append($imforTop);
			// console.log(${imgUrl});


	})
})	