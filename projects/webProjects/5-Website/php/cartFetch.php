<?php
include("connection.php");
// error_reporting(E_ERROR | E_PARSE);

function row($Id, $conn, $table){
    $sql = "SELECT * FROM `$table` WHERE (Id = $Id && Page = 'cart')";
    $result = mysqli_query($conn, $sql) or die("SQL Query Failed1.");
    $row = mysqli_fetch_assoc($result);
    return $row['Id'];
}
$id = $_POST['productId'];
$name = $_POST['name'];
$img = $_POST['image'];
$price = $_POST['productPrice'];
$delChr = $_POST['deliveryCh'];

$sql = "INSERT INTO `$userTable` VALUES ($id, 'cart', '$name', '$img', 'Select a size', 'Select a color',  1, '$price', '$price', '$delChr', '', '', '', '', '')";

if(row($id, $userDatabase, $userTable)==$id){
    echo 'exist';
}
else if(mysqli_query($userDatabase, $sql)){
    echo 1;
} 
else{
    echo 0;
}
// Close connection
mysqli_close($userDatabase);
?>