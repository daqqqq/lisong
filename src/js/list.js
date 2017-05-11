require(['config'],function(){
	require(['jquery','lazy'],function(){
		$('header').load('header.html');
		$('footer').load('footer.html');
		// 懒加载
		$("img").lazyload({effect: "fadeIn"});

		// $("img.lazy").lazyload({
		// 	    event : "mouseover"
		// });
		// 提前加载图片
		$("img.lazy").lazyload({
		    threshold : 150
		});
		// 经过五秒钟的延迟加载图片
		// $(function() {
		//     $("img.lazy").lazyload({
		//         event : "sporty"
		//     });
		// });
		// $(window).bind("load", function() {
		//     var timeout = setTimeout(function() { $("img").trigger("sporty") }, 5000);
		// }); 
	})
})