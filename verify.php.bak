<?php

if(isset($_GET['user']) && !empty($_GET['user']) AND isset($_GET['hash']) && !empty($_GET['hash'])){
    $c=mysqli_connect("fdb19.awardspace.net","2594801_onlineshopmaker","onlineshopmaker1");
	$z=mysqli_select_db($c,"2594801_onlineshopmaker");
	$user = mysqli_real_escape_string($c,$_GET['user']);
    $hash = mysqli_real_escape_string($c,$_GET['hash']);
	$q = mysqli_query($c,"SELECT User_name, Password FROM user WHERE User_name='".$user."' AND Active='0'"); 
	$match  = mysqli_num_rows($q);
	$res = mysqli_fetch_assoc($q);
	if ($match > 0){
		$db_pwd=$res['Password'];
		$db_user=$res['User_name'];
		if($hash == openssl_encrypt($db_pwd,"AES-128-ECB",$db_user)){
			$q=mysqli_query($c,"UPDATE user SET Active='1' WHERE User_name='".$user."' AND Active='0'");
			echo '<script language="javascript">
			alert("Your Account Is Successfully Verified!!!Now You Can Log In with Your Credentials!")
			window.location.href="login.php"
			</script>';
		}
		else{
			echo '<script language="javascript">
			alert("Link is broken or Your account Has Been already verified!!!")
			window.location.href="index.php"
			</script>';
		}
	}
	else{
		echo '<script language="javascript">
		alert("Link is broken or Your account Has Been already verified!!!")
		window.location.href="index.php"
		</script>';
	}
	
}
else{
	echo '<script language="javascript">
	alert("This Link is broken or Your account Has Been already verified!!!")
	window.location.href="index.php"
	</script>';
	}

?>