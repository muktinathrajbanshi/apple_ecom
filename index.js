 const pro = document.getElementById("pro");
 const pro2 = document.getElementById("pro2");

 const iphone = "images/iphone.png";
 const apple_s_5 = "images/apple_s_5.png";

 pro.addEventListener("click", function()  {
    document.getElementById("theImage").src=iphone;
 })

  pro2.addEventListener("click", function()  {
    document.getElementById("theImage").src=apple_s_5;
 })
