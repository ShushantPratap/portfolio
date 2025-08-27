<?php
session_start();
include("connection.php");

if(!isset($_SESSION['loggedin']) || $_SESSION['loggedin']!=true){
	echo 1;
	exit;
}
else{
	error_reporting(E_ERROR | E_PARSE);

	if($_SESSION['Email']){
		$userprofile = $_SESSION['Email'];
	}else{
		$userprofile = $_SESSION['Mobile'];
	}
	$query = "SELECT * FROM $userData WHERE Email='$userprofile' || Mobile='$userprofile'";
	$data=mysqli_query($conn,$query);
	$result = mysqli_fetch_assoc($data);
	echo $result['Name'];
}