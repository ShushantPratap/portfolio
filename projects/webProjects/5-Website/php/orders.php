<div class='yourOrder'>
    <h2>your orders</h2>
    <ul>
<?php
include("Connection.php");

$sql = "SELECT * FROM `$userTable` WHERE (Page = 'order')";
$result1 = mysqli_query($userDatabase, $sql) or die("Please Login.");
$productData = '';
while($row = mysqli_fetch_assoc($result1)){
    $productData .="<li>
        <div class='view'>
        <div class='image'>
            <img src='{$row["Image"]}' alt='{$row["Name"]}'>
        </div>
        <div class='name'>
            <h2>{$row["Name"]}</h2>
            <h3>₹{$row["TotalPrice"]}</h3>
        </div>
        <div class='size'>
            <div class='clothSize'>Size : {$row["Size"]}</div>
            <div class='clothcolor'>Color : {$row["Color"]}</div>
        </div>
        <div class='qnt'>
            <p>{$row["Quantity"]}</p>
            <p class='time'>
                <br>
                <b>
                <span>{$row["OrderTime"]}</span>
                </b>
            </p>
        </div>
        </div>
        <div class='dlv'>
            <button>cancel</button>
            <p>{$row["Delivery"]}</p>
            <h4>Payment method : {$row["Payment"]}</h4>
            <div class='add'>{$row["Address"]}</div>
        </div>
    </li>
     ";
}

echo $productData;
?>
    </ul>
</div>
