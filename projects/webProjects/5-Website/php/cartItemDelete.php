<?php
include('connection.php');

$id = $_POST["id"];
$sql = "DELETE FROM `$userTable` WHERE (Id = {$id} && Page='cart')";

if(mysqli_query($userDatabase, $sql)){
  echo 1;
}else{
  echo 0;
}
?>