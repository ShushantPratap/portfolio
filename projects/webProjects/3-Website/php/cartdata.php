<?php
include('Connection.php');

$sql = "SELECT * FROM `$userTable` WHERE (Page = 'cart')";
$result = mysqli_query($userDatabase, $sql) or die("Please Login.");

$output = '';
$i=0;
if(mysqli_num_rows($result) > 0){
  while($row = mysqli_fetch_assoc($result)){
    $output .="<li>
    <div class='CartItemView' data-id='{$row["Id"]}'>
      <div class='image'>
      <img src='{$row["Image"]}' alt='{$row["Name"]}'>
      </div>
      <div class='name'>
      <h2>{$row["Name"]}</h2>
      <h3>₹{$row["TotalPrice"]}</h3>   
      </div>
    </div>
    <div class='size'>
      <select class='clothSize' data-id='{$row["Id"]}'>
        <option value='{$row["Size"]}'>{$row["Size"]}</option>
      </select>
      <select class='clothColor' data-id='{$row["Id"]}'>
        <option value='{$row["Color"]}'>{$row["Color"]}</option>
      </select>
    </div>
    </div>
      <div class='btn'>
      <button class='remove' data-id='{$row["Id"]}'><i class='fa-regular fa-trash-can'></i></button>
      <button class='decreaseQuantity' data-index='{$i}' data-id='{$row["Id"]}'>-</button>
      <span>{$row["Quantity"]}</span>
      <button class='increaseQuantity' data-index='{$i}' data-id='{$row["Id"]}'>+</button>
      </div>
      <input type='text' value='{$row["Id"]}' style='display:none;'>
      </li>";
    $i++;
  }

mysqli_close($userDatabase);
echo $output;

}else{
    echo '<h1>Add products</h1>
    <a href="index.html">
    <button id="reload">Explore more</button></a>';
}

?>
