<?php
	include 'DBHelper.php';
	
	$username = $_POST["username"];
	$password = $_POST["password"];
	$apassword = $_POST["apassword"];
	//判断当前 username 是否已存在数据表中
	$usernameCheck = "select * from shop_register where `username` ='$username'";
	$result = query($usernameCheck);

	//当前 email 不存在，执行插入操作
	if(count($result) < 1){
		$sql = "insert into shop_register(username, password, apassword) values('$username', '$password', '$apassword')";
		// echo $sql;
		$excute = excute($sql);
		if($excute){
			echo "{state: true}";
		} else {
			echo "{state: false, message: '注册失败！！！'}";
		}
	} else {
		echo "{state: false, message: '登录名 已被注册！！！'}";
	}
?>