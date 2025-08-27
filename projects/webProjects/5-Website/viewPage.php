<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>View Page</title>
    <script src="https://kit.fontawesome.com/7ea6e55696.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>

<body>

	<nav class="nav-bar">
		<button id="openMenu">
			<i class="fa-solid fa-bars-staggered"></i>
		</button>
		<div class="menu">
			<a href="#" class="close-menu">
				<i class="fa-regular fa-circle-xmark"></i>
			</a>
			<a href="index.html">HOME</a>
			<a id="account">Account</a>
			<a href="collections.php?collection=order">track order</a>
			<a href="collections.php?collection=new">new arrivals</a>
			<a href="collections.php?collection=best">best selling</a>
			<a href="#">customer support</a>
			<a href="#">visit store</a>
			<a href="#">About us</a>
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

    
    <div id="container">

        <div class="viewPage">
            <div class="main">
                <div class="productImage">
                    <div class="imageSlide"></div>
                    <div class="imageView">
                        <div class="btn">
                            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                            <a class="next" onclick="plusSlides(1)">&#10095;</a>
                        </div>
                        <div class="image"></div>
                    </div>
                </div>

                <div class="productDetails">
                    <h2>name</h2>
                    <h3>Full name pants and shirts</h3>
                    <div class="price">
                        <h1>₹1299</h1>
                        <p>₹2499</p>
                    </div>
                    <div class="size">
                        <p>Select a Size</p>
                        <div class="row clothSize"></div>
                    </div>
                    <div class="size">
                        <p>Select a Color</p>
                        <div class="row color"></div>
                    </div>
                    <div class="btn">
                        <button style="background: transparent;" onclick="addToCart(productIndex)">Add to cart</button>
                        <button onclick="orderLoad()">Buy</button>
                    </div>
                    <div class="section">
                        <h4>product details</h4>
                        <ul>
                            <li>color</li>
                            <li>color</li>
                            <li>color</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="heading">
                <h2>products</h2>
            </div>

<div class="card"></div>

</div>

<input id="index" type="text" value="<?php echo$_GET['id']?>" hidden/>
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/products.js"></script>
<script type="text/javascript" src="js/script.js"></script>
<script type="text/javascript">

    const productIndex = parseInt(document.getElementById("index").value);
    let productObject = products[productIndex];
    function orderLoad(){
        window.open(`placeOrder.php?id=${productObject.id}`,"_self");
    }
    function imageSlider(){
        let sliders = document.querySelector('.image');
        let sliderDot = document.querySelector('.imageSlide');
        let output = '';
        let output1 = '';
        for (i = 0; i < productObject.img.length; i++) {
            output += `
            <img src="${productObject.img[i]}" class="mySlides ">
            `;
            output1 += `
            <img src="${productObject.img[i]}" class="imageDot" onclick="currentSlide(${i + 1})">
            `;
        }
        sliders.innerHTML = output;
        sliderDot.innerHTML = output1;
    }
    imageSlider();
    let slideIndex = 1;
    showSlides(slideIndex);
    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    // image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("imageDot");

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

// Product-details
    let name = document.querySelector('.productDetails h2');
    let fullName = document.querySelector('.productDetails h3');
    let price = document.querySelector('.price h1');
    let realPrice = document.querySelector('.price p');
    let selectSize = document.querySelector('.size .clothSize');
    let selectColor = document.querySelector('.size .color');
    let details = document.querySelector('.section ul');

    document.querySelector('title').textContent = productObject.name;
    name.textContent = productObject.name;
    fullName.textContent = productObject.fname;
    price.textContent = '₹'+productObject.price;
    realPrice.textContent = '₹'+productObject.rprice;
    productObject.size.forEach(value=>{
        let div = `<div>${value}</div>`;
        selectSize.insertAdjacentHTML("beforeend", div)        
    });
    productObject.color.forEach(value=>{
        let div = `<div>${value}</div>`;
        selectColor.insertAdjacentHTML("beforeend", div)        
    });
    productObject.details.forEach(value=>{
        let div = `<li>${value}</li>`;
        details.insertAdjacentHTML("beforeend", div)        
    });
</script>
<script type="text/javascript" src="js/script.js"></script>


</body>

</html>