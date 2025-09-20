<?php
$server="localhost";
$user="root";
$pass="";
$db="database";

$conn = mysqli_connect($server, $user, $pass, $db);
// user-tables
$userDatabase = mysqli_connect($server, $user, $pass, "usertables");
// user-data-table-name
$userData = 'userdata';

if($conn){
	error_reporting(E_ERROR | E_PARSE);
	session_start();
	if($_SESSION['Email']){
		$userprofile = $_SESSION['Email'];
	}else{
		$userprofile = $_SESSION['Mobile'];
	}
	$query = "SELECT * FROM $userData WHERE Email='$userprofile' || Mobile='$userprofile'";
	$data=mysqli_query($conn,$query);
	$result = mysqli_fetch_assoc($data);
	$userTable =  $result['userId'];
}
else{
	echo"Connection Failed".mysqli_connect_error();
}
?>
