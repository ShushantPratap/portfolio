<?php
include('Connection.php');

$sql = "SELECT * FROM `$userTable` WHERE (Page = 'cart')";
$result = mysqli_query($userDatabase, $sql) or die("Please Login.");

$output = '';
if(mysqli_num_rows($result) > 0){
  while($row = mysqli_fetch_assoc($result)){
    $output .="<li>
    <div class='image'>
    <img src='{$row["Image"]}' alt='{$row["Name"]}'>
    </div>
    <div class='name'>
    <h2>{$row["Name"]}</h2>
    <h3>₹{$row["TotalPrice"]}</h3>   
    </div>
    <div class='selectArea'>
    <div class='size'>
      <select class='clothSize' data-id='{$row["Id"]}'>
        <option value='{$row["Size"]}'>{$row["Size"]}</option>
      </select>
    </div>
    <div class='size'>
      <select class='clothColor' data-id='{$row["Id"]}'>
        <option value='{$row["Color"]}'>{$row["Color"]}</option>
      </select>
    </div>
    </div>
    <input type='text' value='{$row["Id"]}' style='display:none;'>
    </li>";
  }

mysqli_close($userDatabase);
echo $output;

}else{
    echo '<h1>Add products</h1>
    <a href="index.html">Add product</a>';
}

?>
