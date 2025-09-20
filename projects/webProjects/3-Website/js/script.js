// Open-close-menu
document.getElementById('openMenu').addEventListener('click', ()=>{
  let menu = document.querySelector('.menu'),
  closeMenu = document.querySelector('.close-menu'),
  container = document.getElementById('container');
  // menu.style.left='0';
  menu.classList.add("menuActive")
  container.addEventListener('click', ()=>{
    menu.classList.remove("menuActive")
  });
  closeMenu.addEventListener('click', ()=>{
    menu.classList.remove("menuActive")
  });
});
 
// Signup/Login-form
function account(){
  // Signup-form
  $("#signup").on("click",function(e){
    e.preventDefault();
    let name = $("#username").val();
    let email = $("#useremail").val();
    let mobile = $("#mobile").val();
    let password = $("#userPassword").val();
    let date = new Date();
    if(name == "" || email == "" || mobile == "" || password == ""){
      $("#error-message").html("All fields are required.").slideDown();
      $("#success-message").slideUp();
    }
    else if(mobile.length < 10){
       $("#error-message").html("Please enter 10 digits mobile number.").slideDown();
       $("#success-message").slideUp();
     }
     else if(mobile.length > 10){
       $("#error-message").html("Please enter valid number.").slideDown();
       $("#success-message").slideUp();
     }
    else{
      $.ajax({
        url: "php/fetch.php",
        type : "POST",
        data : {fullname: name, email: email, mobile: mobile, pwd: password, date: date},
        success : function(data){
          if(data == 1){
            let x = name.split(' ')[0];
            $.ajax({
              url: "php/genUserid.php",
              type : "POST",
              data : {userid: x, email: email},
              success : function(data){
                let y = data.split(' ');
                if(y[0] == 1){      
                  $("#SignForm").trigger("reset");
                  $("#success-message").html("Signup Successfully.").slideDown();
                  $("#error-message").slideUp();
                  $.ajax({
                    url: "php/createTable.php",
                    type : "POST",
                    data : {tableName: y[1]},
                    success : function(data){
                      if(data == 1){
                        $("#success-message").html("Success.").slideDown();
                        $("#error-message").slideUp();
                        // Auto-Login--
                        $.ajax({
                          url: "php/Fetch2.php",
                          type : "POST",
                          data : {username: email, password: password},
                          success : function(data){
                            if(data == 1){
                              window.open('index.html', '_self');
                            }else{
                              $("#error-message").html("Please try to Login.").slideDown();
                              $("#success-message").slideUp();
                            }
                          }
                        });
                      }else{
                        $("#error-message").html("Functional problem.").slideDown();
                        $("#success-message").slideUp();
                      }
                    }
                  });
                }else{
                  $("#error-message").html("Can't Create Account.").slideDown();
                  $("#success-message").slideUp();
                }
              }
            });
          }else{
            $("#error-message").html("Can't Create Account.").slideDown();
            $("#success-message").slideUp();
          }
        }
      });
    
    }
  });
  // Login-form--
  $("#login").on("click",function(e){
    e.preventDefault();
    var name = $("#loginEmail").val();
    var password = $("#loginPassword").val();
    if(name == "" || password == ""){
      $("#error-message").html("All fields are required.").slideDown();
      $("#success-message").slideUp();
    }else{
      $.ajax({
        url: "php/Fetch2.php",
        type : "POST",
        data : {username: name, password: password},
        success : function(data){
          if(data == 1){
            $("#LogForm").trigger("reset");
            window.open('index.html', '_self');
          }else{
            $("#error-message").html("Can't Login Account.").slideDown();
            $("#success-message").slideUp();
          }
        }
      });
    }
  });

}

// Account-Enable
$.ajax({
  url : "php/welcome.php",
  type : "POST",
  success : function(data){
    let accountBtn = document.getElementById("account");
    let name = $('.welcome h2');
    let logbtn = document.querySelector('.welcome a');
    if(data==1){
      accountBtn.setAttribute('href', 'Account.php');
      logbtn.setAttribute('href', 'Account.php');
    }else{
      logbtn.innerHTML='Log out';
      accountBtn.setAttribute('href', 'collections.php?collection=account');
      logbtn.setAttribute('href', 'php/logout.php');
      name.html('Hi '+data);
    }
  }
});

// Product-Search
let searchResult = document.querySelector(".searchResult ul");
// Open-search-bar
document.getElementById('searchBarOpen').addEventListener('click', ()=>{
  let searchBar = document.querySelector('.search');
  let container = document.querySelector('#container');
  let searchInp = document.getElementById('searchInput');
  searchBar.style.width='calc(100% - 115px)';
  searchInp.focus();
  container.addEventListener('click', ()=>{
    searchBar.style.width='0';
    searchResult.style.display="none";
  });
});
products.forEach((value, key)=>{
  let product = `<li onclick="tempLoad(${key})">
      <div class="image">
      <img src="${value.img[0]}" alt="${value.name}">
      </div>
      <div class="name">
      <h2>${value.name}</h2>
      <p>₹${value.price}</p>
      </div>
    </li>`;
  searchResult.insertAdjacentHTML("beforeend", product);
});
function productSearch(){
  searchResult.style.display="block";
  let searchField = document.getElementById("searchInput").value.toUpperCase();
  let liTag = searchResult.querySelectorAll("li");
  let pname = searchResult.getElementsByTagName("h2"); 
  for(let i=0; i<pname.length; i++){
    let match = liTag[i].getElementsByTagName("h2")[0];
    if(match){
      let textvalue = match.textContent || match.innerHTML;
      if(textvalue.toUpperCase().indexOf(searchField) > -1){
        liTag[i].style.display = "";
      }else{
        liTag[i].style.display = "none";
      }
    }
  }
}

// Product-templates
const productTemp = (i)=>{
  return `
  <div class="col-6">
    <div onclick="tempLoad(${i})">
      <div class="image">
       <img src ="${products[i].img[0]}">
      </div>
      <div class="details">
        <p>${products[i].name}</p>
        <h3>₹${products[i].price}</h3>
      </div>
    </div>
    <button onclick="addToCart(${i})">Add to cart</button>
  </div>
  `;
};
let pageTitel = document.querySelector('title');
let card = document.querySelector('.card');
// Product-templates
for(key in products){
  let product = productTemp(key);
  let pageTitelText = pageTitel.innerHTML
  if(pageTitelText=="Home"){
    card.insertAdjacentHTML('beforeend', product);
  }
}
// Collection-Page
function collect(){
  let collectionPage = document.querySelector('.collection');
  let collection = document.getElementById("collection").value;
  let heading = document.querySelector(".heading h2");

  // Product-templates
  products.forEach((templates));
  function templates(value, key){
    let product = productTemp(key);
    let pageTitelText = pageTitel.innerHTML
    if(pageTitelText=="Home"){
      card.insertAdjacentHTML('beforeend', product)
    }
    if(collection=="shirts" && value.category=='shirts'){
      pageTitel.innerHTML=collection.toUpperCase();
      heading.innerHTML="CATEGORY is " + collection;
      card.insertAdjacentHTML('beforeend', product);
    }
    if(collection=="t-shirts" && value.category=='t-shirts'){
      pageTitel.innerHTML=collection.toUpperCase();
      heading.innerHTML="CATEGORY is " + collection;
      card.insertAdjacentHTML('beforeend', product);
    }
  if(collection=="jeans" && value.category=='jeans'){
    pageTitel.innerHTML=collection.toUpperCase();
    heading.innerHTML="CATEGORY is " + collection;
    card.insertAdjacentHTML('beforeend', product);
  }
  if(collection=="pants" && value.category=='pants'){
    pageTitel.innerHTML=collection.toUpperCase();
    heading.innerHTML="CATEGORY is " + collection;
    card.insertAdjacentHTML('beforeend', product);
  }
  if(collection=="shorts" && value.category=='shorts'){
    pageTitel.innerHTML=collection.toUpperCase();
    heading.innerHTML="CATEGORY is " + collection;
    card.insertAdjacentHTML('beforeend', product);
  }
  if(collection=="jackts" && value.category=='jackets'){
    pageTitel.innerHTML=collection.toUpperCase();
    heading.innerHTML="CATEGORY is " + collection;
    card.insertAdjacentHTML('beforeend', product);
  }
  if(collection=='new' && value.arrival=='new'){
    pageTitel.innerHTML="new arrivals".toUpperCase();
    heading.innerHTML="new arrivals";
    card.insertAdjacentHTML('beforeend', product);
  }
  if(collection=='best' && value.sell=='best'){
    pageTitel.innerHTML="best selling".toUpperCase();
    heading.innerHTML="best selling";
    card.insertAdjacentHTML('beforeend', product);
  }
}

// Account-page
  if(collection == "account"){
    pageTitel.innerHTML="your account".toUpperCase();
    heading.setAttribute("hidden", "");
    $.ajax({
      url : "php/account.php",
      type : "POST",
      success : function(data){
        collectionPage.innerHTML=data;
      }
    });
    // Your-orders
    $(document).on("click","#delAccount", function(){
      let Id = $(this).data('id');
      if(confirm("Are you deleting your account")){
        $.ajax({
          url: "php/deleteAccount.php",
          type : "POST",
          data : {id : Id},
          success : function(data){
            if(data == 1){
              alert("Account Deleted Successfuly.");
              window.open("php/logout.php", "_self");
            }else{
              alert("Can't Delete Account.");
            }
          }
        });
      }
    });
  }
  
  // Your-orders
  if(collection == "order"){
    pageTitel.innerHTML="Orders".toUpperCase();
    heading.setAttribute("hidden", "");
    $.ajax({
      url : "php/orders.php",
      type : "POST",
      success : function(data){
        collectionPage.innerHTML=data;
      }
    });
  }
  
  // Visit-Store
  if(collection == "store"){
    pageTitel.innerHTML="visit store".toUpperCase();
    heading.innerHTML="visit store";
    $.ajax({
      url : "php/visitStore.php",
      type : "POST",
      success : function(data){
        collectionPage.innerHTML=data;
      }
    });
  }

}

// Category
function category(text){
  window.open(`collections.php?collection=${text}`);
}

// View-page
function tempLoad(n){
  window.open(`viewPage.php?id=${n}`);
}

// Add-to-cart
const addToCart = (n)=>{
  let value = products[n],
      id = value.id,
      name = value.name,
      img = value.img[0],
      price = value.price,
      delChr = value.DeliveryCh;
  if(id == "" || name == "" || img == "" || price == ""){
    alert("Functional problem")
  }else{
    $.ajax({
      url: "php/cartFetch.php",
      type : "POST",
      data : {productId: id, name: name, image: img, productPrice: price, deliveryCh: delChr},
      success : function(data){
        if(data == 1){
          cartNumber();
         }
         else if(data=='exist'){
          document.querySelectorAll(".col-6 button")[n].innerHTML='Added';
         }
         else{
          alert("Can't Add product.") 
        }
      }
    });
  }
};

// Cart-Bag-Number
const cartNumber = ()=>{
  $.ajax({
    url : "php/cartNumber.php",
    type : "POST",
    success : function(data){
      if(data>0){
        $(".cart-btn span").html(data);
      }else{
        $(".cart-btn").slideUp();
        $(".cart-btn").slideDown();
      }
    }
  });
};
cartNumber();
// Cart-Page
const cartLoad = ()=>{
  // Load-Cart-Data
  $.ajax({
    url : "php/cartdata.php",
    type : "POST",
    success : function(data){
      $(".cart ul").html(data);
      priceDetails();
      // Update-clothSize
      let index = document.querySelectorAll("li input");
      for(a=0; a<index.length; a++){
        let clothSize = document.querySelectorAll(".clothSize")[a];
        let clothColor = document.querySelectorAll(".clothColor")[a];
        let x = index[a].value;
        products.forEach((value, key) => {
          if(value.id==x){
            for(i=0; i<value.size.length; i++){
              let size = `<option value="${value.size[i]}">${value.size[i]}</option>`;
              clothSize.insertAdjacentHTML("beforeend", size);
            }
            for(i=0; i<value.color.length; i++){
              let color = `<option value="${value.color[i]}">${value.color[i]}</option>`;
              clothColor.insertAdjacentHTML("beforeend", color);
            }
          }
        });
      }
    }
  });

  // Update-clothSize
  $(document).on("change",".clothSize", function(){
    let Id = $(this).data("id");
    let element = $(this).val();
    $.ajax({
      url: "php/updateSize.php",
      type : "POST",
      data : {id : Id, size: element},
      success : function(data){
        if(data == 1){}else{
          alert("Can't Set Size");
        }
      }
    });
  });
  // Update-clothColor
  $(document).on("change",".clothColor", function(){
    let Id = $(this).data("id");
    let element = $(this).val();
    $.ajax({
      url: "php/updateColor.php",
      type : "POST",
      data : {id : Id, color: element},
      success : function(data){
        if(data == 1){}else{
          alert("Can't Set Color");
        }
      }
    });
  });

  //Remove-Cart-Item
  $(document).on("click",".remove", function(){
    let Id = $(this).data("id");
    let element = this;
    $.ajax({
      url: "php/cartItemDelete.php",
      type : "POST",
      data : {id : Id},
      success : function(data){
        if(data == 1){
          $(element).closest("li").fadeOut();
          cartNumber();
          priceDetails();
        }else{
          alert("Can't remove product.")
        }
      }
    });
  });

  //Quantity(+)Cart-Item
  $(document).on("click",".increaseQuantity", function(){
    let id = $(this).data("id");
    let i = $(this).data("index");
    $.ajax({
      url: "php/incQuantity.php",
      type : "POST",
      data : {Id : id},
      success : function(data){
        let x = data.split(' ');
        if(x[0]>0){
          document.querySelectorAll(".btn span")[i].innerHTML=x[0];
          document.querySelectorAll(".cart li h3")[i].innerHTML='₹'+x[1];
          priceDetails();
        }else if(data=='over'){
          alert("Just accept 10 quantity.");
        }
        else{
          alert("Can't increase quantity.");
        }
      }
    });
  }); 
  //Quantity(-)Cart-Item
  $(document).on("click",".decreaseQuantity", function(){
    let id = $(this).data("id");
    let i = $(this).data("index");
    let element = this;
    $.ajax({
      url: "php/decQuantity.php",
      type : "POST",
      data : {Id : id},
      success : function(data){
        let x = data.split(' ');
        if(x[0]>0){
          document.querySelectorAll(".btn span")[i].innerHTML=x[0];
          document.querySelectorAll(".cart li h3")[i].innerHTML='₹'+x[1];
          priceDetails();
        }
        else if(data=='Remove'){
          $(element).closest("li").fadeOut();
          cartNumber();
          priceDetails();
        }
        else{
          alert("Can't decrease quantity.");
        }
      }
    });
  });

  // View-Cart-Item
  $(document).on("click",".CartItemView", function(){
    let Id = $(this).data("id");
    products.forEach(function(value, key){
      if(value.id==Id){
        tempLoad(key);
      }
    });
  });

  // Price-Details
  const priceDetails = ()=>{
    $.ajax({
      url : "php/priceDetails.php",
      type : "POST",
      success : function(data){
        let x = data.split(' '),
        total = parseInt(x[1])+parseInt(x[2]);
        if(x[0]>0){
          $(".priceDetails span").html(x[0]);
          $(".priceDetails #price").html('₹'+x[1]);
          $(".priceDetails h1 p").html('₹'+total);
          if(x[2]==0){
            $(".priceDetails #deliveryCharge").html('Free');
          }else{
            $(".priceDetails #deliveryCharge").html('₹'+x[2]);
          }
        }else{
            $(".cart .priceDetails").hide();
            $(".cart .placeOrder").hide();
        }
      }
    });
  };
  priceDetails();
  // Place-order
  $(document).on("click","#placeOrder", function(){
    window.open("placeOrder.php?id=cart")
    let Id = $(this).data("id");
    products.forEach(function(value, key){
      if(value.id==Id){
        tempLoad(key);
      }
    });
  });

};

// Order-Page
function loadOrder(){
  let productId = document.getElementById("index").value;
  let orderProduct = products[productId];
  let ulTag = document.querySelector(".order ul");
  if(productId == "cart"){
    $.ajax({
      url : "php/orderdata.php",
      type : "POST",
      success : function(data){
        $(".order ul").html(data);
        let index = document.querySelectorAll("li input");
        for(a=0; a<index.length; a++){
          let clothSize = document.querySelectorAll(".clothSize")[a];
          let clothColor = document.querySelectorAll(".clothColor")[a];
          let x = index[a].value;
          products.forEach((value, key) => {
            if(value.id==x){
              for(i=0; i<value.size.length; i++){
                let size = `<option value="${value.size[i]}">${value.size[i]}</option>`;
                clothSize.insertAdjacentHTML("beforeend", size);
              }
              for(i=0; i<value.color.length; i++){
                let color = `<option value="${value.color[i]}">${value.color[i]}</option>`;
                clothColor.insertAdjacentHTML("beforeend", color);
              }
            }
          });
        }
      }
    });

  // Update-clothSize
  $(document).on("change",".clothSize", function(){
    let Id = $(this).data("id");
    let element = $(this).val();
    $.ajax({
      url: "php/updateSize.php",
      type : "POST",
      data : {id : Id, size: element},
      success : function(data){
        if(data == 1){}else{
          alert("Can't Set Size");
        }
      }
    });
  });
  // Update-clothColor
  $(document).on("change",".clothColor", function(){
    let Id = $(this).data("id");
    let element = $(this).val();
    $.ajax({
      url: "php/updateColor.php",
      type : "POST",
      data : {id : Id, color: element},
      success : function(data){
        if(data == 1){}else{
          alert("Can't Set Color");
        }
      }
    });
  });

  }
  else{
    let orderDetails = `
    <li>
    <div class='image'>
    <img src='${orderProduct.img[0]}' alt='${orderProduct.name}'>
    </div>
    <div class='name'>
    <h2>${orderProduct.name}</h2>
    <h3>${orderProduct.price}</h3>   
    </div>
    <div class="size">
    <select class='clothSize'>
      <option value='size'>Select a Size</option>
    </select>
    </div>
    <div class="size">
    <select class='clothColor'>
      <option value='color'>Select a color</option>
    </select>
    </div>
    </li>`;
    ulTag.insertAdjacentHTML("beforeend", orderDetails);
    let clothSize = document.querySelector(".clothSize");
    let clothColor = document.querySelector(".clothColor");
    for(i=0; i<orderProduct.size.length; i++){
      let size = `<option value="${orderProduct.size[i]}">${orderProduct.size[i]}</option>`;
      clothSize.insertAdjacentHTML("beforeend", size);
    }
    for(i=0; i<orderProduct.color.length; i++){
      let color = `<option value="${orderProduct.color[i]}">${orderProduct.color[i]}</option>`;
      clothColor.insertAdjacentHTML("beforeend", color);
    }
  }

  // Place-Order--
  $("#orderBtn").on("click",function(e){
    e.preventDefault();
    let name = $("#fname").val(),
    phone = $("#orderPhone").val(),
    addPhone = $("#addPhone").val(),
    pincode = $("#pincode").val(),
    state = $("#state").val(),
    city = $("#city").val(),
    houseNum = $("#hnumber").val(),
    roadname = $("#roadname").val();
    let payMethod = document.querySelectorAll(".payment");
    let payment;
      payMethod.forEach((inp)=>{
        if (inp.checked) {
          payment = inp.value;
        }
      });
    if(name == "" || phone == "" || addPhone == "" || pincode == "" 
      || state == "" || city == "" || houseNum == "" || roadname == ""){
      $("#error-message").html("All fields are required.").slideDown();
      $("#success-message").slideUp();
    }else{
      let address = `Name : ${name}, Phone : ${phone}/ ${addPhone}, ${state}, ${city} ${pincode}, 
      ${houseNum}, ${roadname}`;
      let phoneAdd = `${phone},${addPhone}`;
      let time = new Date();
      if(productId == "cart"){
        $.ajax({
          url: "php/orderFetch.php",
          type : "POST",
          data : {phoneAdd:phoneAdd, address: address, pay: payment, time: time},
          success : function(data){
            if(data == 1){
              alert('Order Successfuly')
              window.open('index.html', '_self');
            }else{
              $("#error-message").html("Can't order.").slideDown();
              $("#success-message").slideUp();
            }
          }
        });
      }else{
        for(key in products){
          let value = products[key];
          if(value.id==productId){
            let name = value.name,
            img = value.img[0],
            price = value.price,
            delChr = value.DeliveryCh,
            size = $(".clothSize").val(),
            color = $(".clothColor").val();
            $.ajax({
              url: "php/orderFetch1.php",
              type : "POST",
              data : {id:productId,
                name:name, img:img,
                price:price, dvlCh:delChr,
                size:size, color:color,
                phoneAdd:phoneAdd,
                address: address, pay: payment, 
                time: time
              },
              success : function(data){
                if(data == 1){
                  alert('Order Successfuly')
                  window.open('index.html', '_self');
                }else{
                  $("#error-message").html("Can't order.").slideDown();
                  $("#success-message").slideUp();
                }
              }
            });
            break;
          }
        }

      }
    }
  });

};