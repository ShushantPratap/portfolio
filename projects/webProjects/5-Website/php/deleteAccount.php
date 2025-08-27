<?php

include("Connection.php");

$id = $_POST['id'];

$sql = "DELETE FROM $userData  WHERE userId = '$id'";
$table = "DROP TABLE `$id`";
          
if(mysqli_query($conn, $sql)){
    if(mysqli_query($userDatabase, $table)){
        echo 1;
    }
    else{
        echo 0;
    }
}
else{
    echo 0;
}
// Close connection
mysqli_close($conn);
mysqli_close($userDatabase);

?>