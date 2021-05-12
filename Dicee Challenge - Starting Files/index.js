
var n=Math.floor(Math.random()*6)+1;
var m=Math.floor(Math.random()*6)+1;
var pic1="images\\dice"+n+".png";
var pic2="images\\dice"+m+".png";
document.getElementById("img1").setAttribute("src",pic1);
document.getElementById("img2").setAttribute("src",pic2);
if(n>m)
document.getElementsByTagName("h1")[0].textContent="Player 1 won";
if(m>n)
document.getElementsByTagName("h1")[0].textContent="Player 2 won";
if(n==m)
document.getElementsByTagName("h1")[0].textContent="Draw";

