<?php
include('connection.php');

$sql = "SELECT * FROM `$userTable` WHERE (Page='cart')";
$result = mysqli_query($userDatabase, $sql) or die("SQL Query Failed.");

if(mysqli_num_rows($result) > 0){
    echo mysqli_num_rows($result);
}
else{
    echo 0;
}

?>
