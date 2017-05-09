require(['config'],function(){
	require(['jquery'],function(){
		$('header').load('../html/header.html');
		$('.login_gjw').click(function(){
	        $.post('login.php',{
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