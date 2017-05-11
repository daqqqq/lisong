require(['config'],function(){
	require(['jquery','confirm'],function(){
		$('header').load('header.html <div id="container"></div>');
		$('footer').load('footer.html');
		
	});
})