<?php
session_start();
include("Connection.php");

$user = $_POST['username'];
$pwd = $_POST['password'];

$query = "SELECT * FROM $userData WHERE Email='$user' || Mobile='$user' && Password='$pwd'";
$data = mysqli_query($conn,$query);
$total=mysqli_num_rows($data);

if($total==1){
    $_SESSION['loggedin'] = true;
    if(mysqli_fetch_assoc($data)['Mobile'] == $user){
        $_SESSION['Mobile'] = $user;
        echo 1;
    }else{
        $_SESSION['Email'] = $user;
        echo 1;
    }
}
else{
    echo 0;
}

?>



