<?php
include('Connection.php');

function row($Id, $conn, $table){
  $sql = "SELECT * FROM `$table` WHERE (Id = $Id && Page = 'cart')";
  $result = mysqli_query($conn,$sql) or die("SQL Query Failed.");
  $row = mysqli_fetch_assoc($result);
  return $row;
}
$id = $_POST['Id'];
$i = row($id, $userDatabase, $userTable)['Quantity']-1;
$price = row($id, $userDatabase, $userTable)['Price']*$i;

if($i<1){
  $sql = "DELETE FROM `$userTable` WHERE (Id = {$id} && Page = 'cart')";
  if(mysqli_query($userDatabase, $sql)){
    echo 'Remove';
  }else{
    echo 0;
  }
}
else{
  $sql = "UPDATE `$userTable` SET Quantity = {$i}, TotalPrice = {$price} WHERE (Id = {$id} && Page = 'cart')";
  if(mysqli_query($userDatabase, $sql)){
    echo row($id, $userDatabase, $userTable)['Quantity'].' ';
    echo row($id, $userDatabase, $userTable)['TotalPrice'];
  }else{
    echo 0;
  }
}

?>
