<?php

$name = $_POST["Name"];
$phone = $_POST["Phone"];
$email = $_POST["Email"];
$date = $_POST["date"];
$appointment = $_POST["Appointment"];

$conn = mysqli_connect("localhost","root","","ortho") or die("Connection Failed");
$sql = "INSERT INTO appointments (Name, Mobile, Email, Date, Appointments) VALUES ('$name', '$phone', '$email', '$date', '$appointment')";

if(mysqli_query($conn, $sql)){
  echo 1;
}else{
  echo 0;
}

?>