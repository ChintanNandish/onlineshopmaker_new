<?php
session_start();
$username=$_POST["uname"];
$pwd=$_POST["pwd"];
$go_to=$_POST['hidden_go'];
$c=mysqli_connect("fdb19.awardspace.net","2594801_onlineshopmaker","onlineshopmaker1");
$z=mysqli_select_db($c,"2594801_onlineshopmaker");
$au="select User_name,Active,Email,Name from user where User_name='".$username."' AND Password='".$pwd."'";
$q=mysqli_query($c,$au);
$res = mysqli_fetch_assoc($q);
if($res['Active']==1){
	$_SESSION['username']=$res['User_name'];
	$_SESSION['other']=$res['Name'].'#'.$res['Email'];
	if($_SESSION['go']==1){
		$_SESSION['go']=0;
		header("location:websitebuilder.php");
	}
	else{
		header("location:index.php");
	}
}
else{
	echo '<script language="javascript">
	alert("You have not Verified Your Email. Please Verify To Log In.")
	window.location.href="login.php"
	</script>';
}
?>