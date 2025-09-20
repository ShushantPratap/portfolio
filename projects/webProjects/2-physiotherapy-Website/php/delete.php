<?php

$patient_id = $_POST["Id"];

$conn = mysqli_connect("localhost","root","","ortho") or die("Connection Failed");
$sql = "DELETE FROM appointments WHERE Id = {$patient_id}";

if(mysqli_query($conn, $sql)){
  echo 1;
}else{
  echo 0;
}

?>
