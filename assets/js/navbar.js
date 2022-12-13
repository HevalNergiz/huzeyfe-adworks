$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbarsmotherdiv");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


var a = 0;
var navmenu = document.getElementById("navmenu");
var floatbutton = document.getElementById("floatsearchbutton");


function mobileMenuopen() {

if (a == 0){
 
 document.getElementById('navmenu').style.width = "80vw"; 
floatbutton.classList.add("expand");  

setTimeout(function(){ 
navmenu.classList.add("expand");
document.getElementById('mymenu-bg').style.display = "block";

   }, 400);
/*
setTimeout(function(){ mymenulist.classList.remove("hide");
 }, 700);*/
$(window).scroll(function(){
  if($(this).scrollTop() > 100){
   mobileMenuclose(); 
  }
});

a = 1;
/*
$(window).scroll(function(){
  if($(this).scrollTop() > 100){
   mobileMenuclose(); 
  }
});*/

}

else
{
 mobileMenuclose();
}

}

function mobileMenuclose() {
a = 0;
document.getElementById('mymenu-bg').style.display = "none";

navmenu.classList.remove("expand");
setTimeout(function(){
floatbutton.classList.remove("expand");
document.getElementById('navmenu').style.width = "8rem"; 

   }, 400);
    
    

/*


setTimeout(function(){ document.getElementById('mymenu').style.height = "2rem";
document.getElementById('mymenu').style.width = "2rem";
document.getElementById('mymenu').style.borderRadius = "50%"; }, 100);

setTimeout(function(){ document.getElementById('mymenu').style.bottom = "0%";}, 200);

*/

}

    $(document).ready(function() {
        $('.navmenu a').click(function() {
            mobileMenuclose();
        });
    });

function goHome() {
  window.location.assign("/index.html")
}