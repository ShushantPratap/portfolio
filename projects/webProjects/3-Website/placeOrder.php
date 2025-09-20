<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PLACE ORDER</title>
    <script src="https://kit.fontawesome.com/7ea6e55696.js" crossorigin="anonymous"></script>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body onload="loadOrder()">
<div id="container">
    <form class="order">
        <div class="summary">
            <p>1 delivery address</p>
            <input type="text" name="fname" id="fname" placeholder="Full Name" required/>
            <input type="number" name="orderPhone" id="orderPhone" placeholder="Phone no." required/>
            <input type="number" name="addPhone" id="addPhone" placeholder="Alternate Phone no." required/>
            <input type="number" name="pincode" id="pincode" placeholder="Pincode" required/>
            <input type="text" name="state" id="state" placeholder="State" required/>
            <input type="text" name="city" id="city" placeholder="City" required/>
            <input type="text" name="hnumber" id="hnumber" placeholder="House no.,Building name" required/>
            <input type="text" name="roadname" id="roadname" placeholder="Road name,Area,Colony" required/>
        </div>
        <div class="summary">
            <p>2 order summary</p>
            <ul></ul>
        </div>
        <div class="summary">
            <p>3 payment options</p>
            <div class="size">
                <div class="payArea">
                    <input type="radio" name="pay" class="payment" value="COD" required/>
                    <label>Cash on delivery</label>
                </div>
                <div class="payArea">
                    <input type="radio" name="pay" class="payment" value="Pick up a store" required/>
                    <label>pick up a store</label>
                </div>
            </div>
        </div>
        <button id="orderBtn">place order</button>

    </form>
    
    <div id="error-message"></div>
    <div id="success-message"></div>

</div>
<input id="index" type="text" value="<?php echo$_GET['id']?>" hidden/>

<script type="text/javascript" src="js/products.js"></script>
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/script.js"></script>
    
</body>
</html>