let button = document.getElementById("btn");
let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");

let paragraph = document.getElementById("first-q");
let paragraph1 = document.getElementById("first-q1");
let paragraph2 = document.getElementById("first-q2");
let paragraph3 = document.getElementById("first-q3");

let hbutton = document.getElementById("hbutton");
let hbut1 = document.getElementById("hbutton1");
let hbut2 = document.getElementById("hbutton2");
let hbut3 = document.getElementById("hbutton3");

let show = function() {
   paragraph.style.visibility = "visible"
   button.style.display = "none"
   hbutton.style.display = "flex"
      }

let show1 = function() {
   paragraph1.style.visibility = "visible"
   button1.style.display = "none"
   hbut1.style.display = "flex"
      }
let show2 = function() {
   paragraph2.style.visibility = "visible"
   button2.style.display = "none"
   hbut2.style.display = "flex"
      }
let show3 = function() {
   paragraph3.style.visibility = "visible"
   button3.style.display = "none"
   hbut3.style.display = "flex"
      }

let hide = function(){
         paragraph.style.visibility = "hidden"
         hbutton.style.display = "none"
         button.style.display = "flex"
      }

let hide1 = function(){
         paragraph1.style.visibility = "hidden"
         hbut1.style.display = "none"
         button1.style.display = "flex"
      }
let hide2 = function(){
         paragraph2.style.visibility = "hidden"
         hbut2.style.display = "none"
         button2.style.display = "flex"
      }
let hide3 = function(){
         paragraph3.style.visibility = "hidden"
         hbut3.style.display = "none"
         button3.style.display = "flex"
      }


   button.onclick = show;
   button1.onclick = show1;
   button2.onclick = show2;
   button3.onclick = show3;

   hbutton.onclick = hide;
   hbut1.onclick = hide1;
   hbut2.onclick = hide2;
   hbut3.onclick = hide3;
   







