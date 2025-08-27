<?php
include('connection.php');

$sql = "SELECT * FROM `$userTable` WHERE (Page='cart')";
$result = mysqli_query($userDatabase, $sql) or die("SQL Query Failed.");

$price = 0;
$delivery = 0;
if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
        $price += (int)$row['TotalPrice'];
        $delivery += (int)$row['DeliveryCharge'];
    }
    mysqli_close($userDatabase);
    echo mysqli_num_rows($result).' ';
    echo $price.' ';
    echo $delivery;
}
else{
    echo 0;
}

?>
