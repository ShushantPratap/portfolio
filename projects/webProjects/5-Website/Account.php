<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Account</title>
	<style>
		* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins",
    sans-serif;
}
body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper {
  position: relative;
  max-width: 470px;
  width: 100%;
  border-radius: 12px;
  padding: 20px
    30px
    120px;
  background: #474747;
  box-shadow: 0
    5px
    10px
    rgba(
      0,
      0,
      0,
      0.1
    );
  overflow: hidden;
}
.form.login {
  position: absolute;
  left: 50%;
  bottom: -86%;
  transform: translateX(
    -50%
  );
  width: calc(
    100% +
      220px
  );
  padding: 20px
    140px;
  border-radius: 50%;
  height: 100%;
  background: #fff;
  transition: all
    0.6s
    ease;
}
.wrapper.active
  .form.login {
  bottom: -15%;
  border-radius: 35%;
  box-shadow: 0 -5px
    10px rgba(0, 0, 0, 0.1);
}
.form
  header {
  font-size: 30px;
  text-align: center;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}
.form.login
  header {
  color: #333;
  opacity: 0.6;
}
.wrapper.active
  .form.login
  header {
  opacity: 1;
}
.wrapper.active
  .signup
  header {
  opacity: 0.6;
}
.wrapper
  form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 40px;
}
form
  input {
  height: 60px;
  outline: none;
  border: none;
  padding: 0 10px;
  font-size: 16px;
  font-weight: 400;
  color: #333;
  border-radius: 8px;
  background: #fff;
}
.form.login
  input {
  border: 1px
    solid
    #aaa;
}
.form.login
  input:focus {
  box-shadow: 0
    1px 0
    #ddd;
}
form
  .checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
}
.checkbox
  input[type="checkbox"] {
  height: 16px;
  width: 16px;
  accent-color: #fff;
  cursor: pointer;
}
form
  .checkbox
  label {
  cursor: pointer;
  color: #fff;
}
form a {
  color: #333;
  text-decoration: none;
}
form
  a:hover {
  text-decoration: underline;
}
form
  input[type="submit"] {
  margin-top: 10px;
  padding: none;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
}
.form.login
  input[type="submit"] {
  background: #4070f4;
  color: #fff;
  border: none;
}
#success-message{
  background: #DEF1D8;
  color: green;
  padding: 10px;
  margin: 10px;
  display: none;
  position: fixed;
  right: 15px;
  top: 15px;
}
#error-message{
  background: #EFDCDD;
  color: red;
  padding: 10px;
  margin: 10px;
  display: none;
  position:fixed;
  right: 15px;
  top: 15px;
}
	</style>
</head>
<body onload="account()">

<section class="wrapper">
      <div class="form signup">
        <header>Signup</header>
        <form id="SignForm">
          <input type="text" id="username" name="username" placeholder="Full Name" required />
          <input type="email" id="useremail" name="useremail" placeholder="Email address"  />
          <input type="number" id="mobile" name="mobile" placeholder="Mobile No." required />
          <input type="password" id="userPassword" name="userPassword" placeholder="Password" required />
          <input type="submit" id="signup" value="Signup" />
        </form>
      </div>

      <div class="form login">
        <header>Login</header>
        <form id="LogForm">
          <input type="text" id="loginEmail" name="loginEmail" placeholder="Email or Mobile" required />
          <input type="password" id="loginPassword" name="loginPassword" placeholder="Password" required />
          <a href="#">Forgot password?</a>
          <input type="submit" id="login" name="submit" value="Login" />
        </form>
      </div>

</section>

<div id="error-message"></div>
<div id="success-message"></div>

<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/script.js"></script>
<script>
        const wrapper = document.querySelector(".wrapper"),
          signupHeader = document.querySelector(".signup header"),
          loginHeader = document.querySelector(".login header");

        loginHeader.addEventListener("click", () => {
          wrapper.classList.add("active");
        });
        signupHeader.addEventListener("click", () => {
          wrapper.classList.remove("active");
        });
</script>
</body>
</html>

