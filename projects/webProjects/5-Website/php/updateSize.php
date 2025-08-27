<?php
include('Connection.php');

$id = $_POST['id'];
$size = $_POST['size'];

$sql = "UPDATE `$userTable` SET Size = '{$size}' WHERE (Id = {$id} && Page = 'cart')";
if(mysqli_query($userDatabase, $sql)){
    echo 1;
}else{
    echo 0;
}


?>
