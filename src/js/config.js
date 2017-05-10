require.config({
	//basrUrl:"js",
	paths:{
		"jquery":"jquery-3.1.1",
		"slideshow":"jquery.lxcarousel",
		"gfdzoom":"jquery.gdszoom",

	},	
	 shim:{
    	// 表示gdszoom依赖jquery
    	"slideshow":["jquery"],
    	"gfdzoom":["jquery"],
    }
});