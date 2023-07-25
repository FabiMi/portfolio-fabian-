window.addEventListener("load", function(){

   let header = document.getElementById("header");

let logo = document.getElementById("logo");
    logo.addEventListener("click", function(){
       logo.classList.add("hide");
    },false);

    let web = document.getElementById("web");
    web.addEventListener("click", function(){
       logo.classList.toggle("hide");
   


    web.style.color="red";
    },false);

    
let picture = document.getElementById("pic");
   picture.addEventListener("click", function(){
      let header = document.getElementById("header");
         header.classList.add("opa");



   },false);






},false);

