const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump(){
    if(dispatchEvent.classList!="jump"){
        dino.classList.add("jump");
       

       setTimeout(function(){
          dino.classList.remove("jump")
       },300) 
    }
}
let checkAlive =setInterval(function() {


let dinoTop =parseInt(windows.getComputerStyle(dino).getPropertyValue("top")); 
let cactusLeft =parseInt(windows.getComputerStyle(cactus).getPropertyValue("left"));

if(cactusLeft>0 && cactusLeft<70 && dinoTop>=143){
dino.style.animationPlayState = 'paused';
cactus.style.animationPlayState = 'paused';
alert('Game Over');
Windows.Location.reload();     
}
},10); 
document.addEventListener("keydown", function(){
jump();    
})