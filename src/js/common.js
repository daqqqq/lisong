
define(['jquery'],function($){
	return {
		getCss : function(attr){
			// console.log(999)
			return $('h1').css(attr);
					$('h2').css(attr);
		},
		// animate:function(btn){
		// 	return $('button').hide(btn);
		// }
		randomColor:function(cor){
			return $('h2').css(cor);
		}
	}
});
