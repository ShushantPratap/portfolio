<?php
include("connection.php");

$userid = $_POST['userid'];
$Email = $_POST['email'];

$sql = "SELECT * FROM $userData";
$result = mysqli_query($conn,$sql) or die("SQL Query Failed.");

if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
        if($Email == $row["Email"]){
            $userid .= "{$row["Id"]}";
        }
    }
}
// Set user id
$sql = "UPDATE $userData SET userId = '@{$userid}' WHERE Email = '{$Email}'";

if(mysqli_query($conn, $sql)){
    echo 1,' @',$userid;
}
else{
    echo 0;
}

// Close connection
mysqli_close($conn);
?>