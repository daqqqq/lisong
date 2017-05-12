require(['config'],function(){
	require(['jquery','confirm'],function(){
		$(function(){
			$('.login_de').click(function(){
				$.post('../php/register.php',{
					username: $('#username').val(),
					password: $('#password').val(),
					apassword: $('#apassword').val()
				}, function(response){
					var $obj = eval('(' + response + ')');
					if($obj.state){
						// alert('注册成功！');
						window.location.href = 'success.html';
					} else {
						alert($obj.message);
					}
				})				
			})
		})
	});
})
