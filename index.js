 const pro = document.getElementById("pro");
 const pro2 = document.getElementById("pro2");

 const iphone = "images/iphone.png";
 const iphone_blue = "images/iphone_pro.png";
 const bWatch = "images/apple_s_5.png";
 const wWatch = "images/apple_s_5_white.png";


 pro.addEventListener("click", function()  {
    document.getElementById("theImage").src=iphone;
 })

  pro2.addEventListener("click", function()  {
    document.getElementById("theImage").src=iphone_blue;
 })

 $("#black_watch").click(() => {
        document.getElementById("theWatch").src=bWatch;
 })

 $("#white_watch").click(() => {
        document.getElementById("theWatch").src=wWatch;
 })