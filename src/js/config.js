require.config({
	//basrUrl:"js",
	paths:{
		"jquery":"jquery-3.1.1",
		"slideshow":"jquery.lxcarousel",
		"gfdzoom":"jquery.gdszoom",
		"shopcar":"jquery.fly",
		"lazy":"../lib/jquery.lazyload",
		"confirm":"jquery-confirm",
		"addcont":"js",
		"com":"common"

	},	
	 shim:{
    	// 表示gdszoom依赖jquery
    	"slideshow":["jquery"],
    	"gfdzoom":["jquery"],
    	"shopcar":["jquery"],
    	"lazy":["jquery"],
    	"confirm":["jquery"],
    	"addcont":["jquery"],
    	"com":["jquery"]
    }
});