<?php
include("connection.php");

$id = $_POST['id'];
$name = $_POST['name'];
$img = $_POST['img'];
$size = $_POST['size'];
$color = $_POST['color'];
$price = $_POST['price'];
$dlvCh = $_POST['dlvCh'];
$phone = $_POST['phoneAdd'];
$address = $_POST['address'];
$payment = $_POST['pay'];
$time = $_POST['time'];

$productData .="Product-Id : {$id}, 
    Product-Name : {$name}, 
    Product-Quantity : 1, 
    Product-Price : ₹{$price}, 
    Cloth-Size : {$size}, 
    Cloth-Color : {$color}, 
    Image-Src : {$img}
    ";

$userName = $result["Name"];
$sql = "INSERT INTO orders VALUES ('$userTable', '$userName', '$phone', '$productData', 1, '$address',  '$dlvCh', 'Arriving', '$pay', '$time')";
if(mysqli_query($conn, $sql)){
    $updateSql = "INSERT INTO `$userTable` VALUES ('$id', 'order', '$name', '$img', '$size', '$color', 1, '$price', '$price', '$dlvCh', '$phone', '$address', 'Arriving', '$pay', '$time')";
    if(mysqli_query($userDatabase, $updateSql)){
        echo 1;
    }else{
        echo 0;
    } 
}else{
    echo 2;
}
// Close connection
mysqli_close($userDatabase);
mysqli_close($conn);

?>