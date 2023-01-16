function registration() {
  var name = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("inputEmail").value;
  var uname = document.getElementById("userName").value;
  var pwd = document.getElementById("inputPassword").value;
  var cpwd = document.getElementById("confirmPassword").value;

  //email id expression code
  var pwd_expression =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  var enletters = /^[A-Za-z]+$/;
  let peletters = new RegExp("[\u0600-\u06FF]");
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (name == "") {
    alert("نام را وارد کنید");
  } else if (!peletters.test(name)) {
    alert("نام فقط شامل حروف الفباست");
  } else if (lastName == "") {
    alert("نام خانوادگی را وارد کنید");
  } else if (!peletters.test(lastName)) {
    alert("نام خانوادگی فقط شامل حروف الفباست");
  } else if (email == "") {
    alert("پست الکترونیکی را وارد کنید");
  } else if (!filter.test(email)) {
    alert("پست الکترونیکی نادرست");
  } else if (uname == "") {
    alert("نام کاربری را وارد کنید");
  } else if (!enletters.test(uname)) {
    alert("نام کاربری فقط شامل حروف الفبای انگلیسی است");
  } else if (pwd == "") {
    alert("گذرواژه را وارد کنید");
  } else if (cpwd == "") {
    alert("گذرواژه را تایید کنید");
  } else if (!pwd_expression.test(pwd)) {
    alert(
      "کاراکترهای ضروری و مجاز گذرواژه:\r\nحروف بزرگ و کوچک انگلیسی\r\nکاراکترهای مخصوص %@!\r\nو اعداد"
    );
  } else if (pwd != cpwd) {
    alert("گذرواژه ها مطابقت ندارند");
  } else if (document.getElementById("inputPassword").value.length < 6) {
    alert("گذرواژه حداقل 6 کاراکتر دارد");
  } else if (document.getElementById("inputPassword").value.length > 12) {
    alert("گذرواژه حداکثر 12 کاراکتر دارد");
  } else {
    alert("با تشکر از عضویت در سرابینو، به پنل کاربری خود وارد می‌شوید!");
    // Redirecting to other page or webste code.
    window.location = "http://www.campuslife.co.in";
  }
}
