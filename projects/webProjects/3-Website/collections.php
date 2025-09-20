<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
  	<script src="https://kit.fontawesome.com/7ea6e55696.js" crossorigin="anonymous"></script>
	  <link rel="stylesheet" type="text/css" href="css/style.css">	
</head>
<body onload="collect()">

<nav class="nav-bar">
		<button id="openMenu">
			<i class="fa-solid fa-bars-staggered"></i>
		</button>
		<div class="menu">
			<a href="#" class="close-menu">
				<i class="fa-regular fa-circle-xmark"></i>
			</a>
			<a href="index.html">HOME</a>
			<a id="account">your Account</a>
			<a href="collections.php?collection=order">track order</a>
			<a href="collections.php?collection=new">new arrivals</a>
			<a href="collections.php?collection=best">best selling</a>
			<a href="collections.php?collection=customer">customer support</a>
			<a href="collections.php?collection=store">visit store</a>
			<a href="collections.php?collection=about">About us</a>
			<div class="social">
				<a href="#"><i class="fa-brands fa-instagram"></i></a>
				<a href="#"><i class="fa-brands fa-facebook"></i></a>
				<a href="#"><i class="fa-brands fa-whatsapp"></i></a>
				<a href="#"><i class="fa-solid fa-phone"></i></a>
			</div>
			<div class="welcome">	
				<h2>Hi</h2>
				<button>
					<a>Log in</a>
				</button>
			</div>
		</div>
        <div class="logo">Logo</div>
		<div class="search">
			<input type="text" placeholder="Search" onkeyup="productSearch()" id="searchInput">
			<button>
				<i class="fa-solid fa-magnifying-glass"></i>
			</button>
		</div>
		<div class="cart-btn">
			<a href="#" id="searchBarOpen">
				<i class="fa-solid fa-magnifying-glass"></i>
			</a>
			<a href="cart.html" data-n="1">
				<img src="icon/shopping-bag.png" alt="cart">
				<span></span>
			</a>
		</div>
    </nav>
	<div class="searchResult">
		<ul></ul>
	</div>

<div id="container">
	<div class="heading">
		<h2></h2>
		<hr>
	</div>
	<div class="collection">
		<div class="card"></div>
	</div>
</div>

<input id="collection" type="text" value="<?php echo$_GET['collection']?>" hidden/>

<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/products.js"></script>
<script type="text/javascript" src="js/script.js"></script>

</body>
</html>