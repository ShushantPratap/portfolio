<?php

include('Connection.php');

$tableName = $_POST['tableName'];

$sql = "CREATE TABLE `$tableName`(
  `Id` int(5) NOT NULL,
  `Page` varchar(25) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Image` varchar(100) NOT NULL,
  `Size` varchar(20) NOT NULL,
  `Color` varchar(50) NOT NULL,
  `Quantity` int(3) NOT NULL,
  `Price` varchar(10) NOT NULL,
  `TotalPrice` varchar(10) NOT NULL,
  `DeliveryCharge` varchar(4) NOT NULL,
  `Mobile` varchar(25) NOT NULL,
  `Address` varchar(100) NOT NULL,
  `Delivery` varchar(25) NOT NULL,
  `Payment` varchar(25) NOT NULL,
  `OrderTime` varchar(100) NOT NULL
)";
 $result = mysqli_query($userDatabase, $sql);

if($result){
    echo 1;
}
else{
    echo 0;
}

?>