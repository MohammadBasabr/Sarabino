function login() {
  var uname = document.getElementById("userName").value;
  var pwd = document.getElementById("inputPassword").value;
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (uname == "") {
    alert("لطفا نام کاربری را وارد کنید");
  } else if (pwd == "") {
    alert("لطفا گذرواژه را وارد کنید");
  }
//   else if (!filter.test(uname)) {
//     alert("Enter valid email id.");
//   }
  else if (pwd.length < 6 || pwd.length > 6) {
    alert("طول گذرواژه 6 کاراکتر است");
  } else {
    alert("ورود موفقیت آمیز");
  }
}
//Reset Inputfield code.
function clearFunc() {
  document.getElementById("email").value = "";
  document.getElementById("pwd1").value = "";
}
