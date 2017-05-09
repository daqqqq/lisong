require.config({
	//basrUrl:"js",
	paths:{
		"jquery":"jquery-3.1.1",
		"slideshow":"jquery.lxcarousel",

	},	
	 shim:{
    	// 表示gdszoom依赖jquery
    	"slideshow":["jquery"]
    }
});