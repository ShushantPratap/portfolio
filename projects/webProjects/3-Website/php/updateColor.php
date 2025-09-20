<?php
include('Connection.php');

$id = $_POST['id'];
$color = $_POST['color'];

$sql = "UPDATE `$userTable` SET Color = '{$color}' WHERE (Id = {$id} && Page = 'cart')";
if(mysqli_query($userDatabase, $sql)){
    echo 1;
}else{
    echo 0;
}


?>
