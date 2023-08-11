window.addEventListener("load", function(){


let logo = document.getElementById("logo");
    logo.addEventListener("click", function(){
       logo.classList.add("hide");
    },false);

    let web = document.getElementById("web");
    web.addEventListener("click", function(){
       logo.classList.toggle("hide");
   
    web.style.color="red";
    },false);



let hamburger = document.getElementById("hamburger");
   hamburger.addEventListener("click", function(){
      let smartmenu = document.getElementById("smart-navigation");
         smartmenu.classList.toggle("smart-navigation-hide");

   },false);

   let closenav = document.getElementById("close-nav");
    closenav.addEventListener("click", function(){
      let smartmenu = document.getElementById("smart-navigation");
      smartmenu.classList.toggle("smart-navigation-hide");

    },false);


},false);

