
for(var i=0;i<7;i++)
document.querySelectorAll(".drum")[i].addEventListener("click",function (){makesound(this.innerHTML);animate(this.innerHTML);});
document.addEventListener("keydown",function (){var key=event.key;makesound(key);animate(key);});
function makesound(key)
{
    if(key==='w')
    {
        var tom1=new Audio(".\\sounds\\tom-1.mp3");
        tom1.play();
    }
    if(key==='a')
    {
        var tom3 =new Audio(".\\sounds\\tom-3.mp3");
        tom3.play();
    }
    if(key==='s')
    {
        var crash=new Audio(".\\sounds\\crash.mp3");
        crash.play();
    }
    if(key==='d')
    {
        var kick =new Audio(".\\sounds\\kick-bass.mp3");
        kick.play();
    }
    if(key==='j')
    {
        var snare =new Audio(".\\sounds\\snare.mp3");
        snare.play();
    }
    if(key==='k')
    {
        var tom4=new Audio(".\\sounds\\tom-4.mp3");
        tom4.play();
    }
    if(key==='l')
    {
        var tom2 =new Audio(".\\sounds\\tom-2.mp3");
        tom2.play();
    }
}
function animate(key)
{
    var use=document.querySelector("."+key);
    use.classList.add("active");
    setTimeout(function () {use.classList.remove("active");},100);
}