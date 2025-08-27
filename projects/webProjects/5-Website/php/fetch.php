<?php
	include("connection.php");

    error_reporting();

$fullname = $_POST['fullname'];
$Email = $_POST['email'];
$mobile = $_POST['mobile'];
$Password = $_POST['pwd'];
$date = $_POST['date'];


$sql = "INSERT INTO $userData  VALUES (NULL, '', '$fullname', '$Email', '$mobile', '$Password', '$date')";
          
if(mysqli_query($conn, $sql)){
    echo 1;
} 
else{
    echo 0;
}
// Close connection
mysqli_close($conn);

?>