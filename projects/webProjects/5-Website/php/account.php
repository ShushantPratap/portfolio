<?php 
include("Connection.php");
?>

<div class="profile">
	<p>your profile</p>
    <h2><?php echo $result['Name'];?></h2>
    <h3 class="mobile"><?php echo 'Mobile : '.$result['Mobile'];?></h3>
    <h3 class="email"><?php echo 'Email : '.$result['Email'];?></h3>
    <h3 class="userId"><?php echo 'User Id : '.$userTable;?></h3>
</div>
<div class="profileBtn">
    <a href="collections.php?collection=order">your orders</a>
    <a href="">customer support</a>
    <a href="">visit store</a>
    <a href="">About</a>
    <button id="delAccount" data-id='<?php echo$userTable?>'>
        delete account
    </button>
    <a id="logout" href="php/logout.php">log out</a>
</div>