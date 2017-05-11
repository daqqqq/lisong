require(['config'],function(){
	require(['jquery','confirm'],function(){
		$('header').load('header.html');
		$('.login_gjw').click(function(){
	        $.post('../php/login.php',{
		          email: $('#email').val(),
		          password: $('#password').val()
		        }, function(response){
		          var $obj = eval('(' + response + ')');
		          if($obj.state){
		            window.location.href = 'index.php';
		          } else {
		            $.alert($obj.message);
		          }
	        });       
	    });
	});
})
