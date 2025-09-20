<?php
include("connection.php");

$phone = $_POST['phoneAdd'];
$address = $_POST['address'];
$payment = $_POST['pay'];
$time = $_POST['time'];

$cartSql = "SELECT * FROM `$userTable` WHERE (Page = 'cart')";
$result1 = mysqli_query($userDatabase, $cartSql) or die("Please Login.");
$productData = '';
$i = 1;
while($row = mysqli_fetch_assoc($result1)){
    $productData .="$i [Product-Id : {$row["Id"]}, 
    Product-Name : {$row["Name"]}, 
    Product-Quantity : {$row["Quantity"]}, 
    Product-Price : ₹{$row["TotalPrice"]}, 
    Cloth-Size : {$row["Size"]}, 
    Cloth-Color : {$row["Color"]}, 
    Image-Src : {$row["Image"]}
    ] ";
    $i++;
}
$userName = $result["Name"];
$i = $i-1;
$orderSql = "INSERT INTO orders VALUES ('$userTable', '$userName', '$phone', '$productData', $i, '$address',  '', 'Arriving', '$pay', '$time')";
if(mysqli_query($conn, $orderSql)){
    $updateSql = "UPDATE `$userTable` SET Page = 'order', Mobile = '{$phone}', Address = '{$address}', Delivery = 'Arriving', Payment = '{$payment}', OrderTime = '{$time}' WHERE Page = 'cart'";
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