var canvas, ctx, singerIMG, bulletIMG, bullet2IMG, bullet3IMG;
const FPS = 30/1000;

var hero = {
    x:0,
    y:450,
    radius:90,
    color:"rgba(0, 0, 0, 0)",
    tiros: 0,
    vivo: true
}

var bala = {
    x:20,   // 1340
    y:0,
    radius:30,
    color: "rgba(0, 0, 0, 0)"
}

var bala2 = {
    x:500,   
    y:0,
    radius:30,
    color: "rgba(0, 0, 0, 0)"
}

var bala3 = {
    x:900,   
    y:0,
    radius:30,
    color: "rgba(0, 0, 0, 0)"
}


window.onload = function(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    
    singerIMG = new Image ();
    singerIMG.src = "img/50_cent.png";
    singerIMG.onload = init;
    
    bulletIMG = new Image ();
    bulletIMG.src = "img/arma.png";
    bulletIMG.onload = init;
    
    bullet2IMG = new Image ();
    bullet2IMG.src = "img/arma.png";
    bullet2IMG.onload = init;
    
    bullet3IMG = new Image ();
    bullet3IMG.src = "img/arma.png";
    bullet3IMG.onload = init;
}

function init(){
    canvas.width = window.innerWidth; 
    canvas.height = window.innerHeight * 0.8;
    
    hero.x = canvas.width/2;
    
    setInterval(gameloop,FPS);
    addEventListener("mousemove",moverMouse);
}

function moverMouse(){
    hero.x = event.clientX - canvas.offsetLeft;
    
    if (hero.x <= hero.radius) 
        hero.x = hero.radius; 
    else if (hero.x >= canvas.width - hero.radius)
        hero.x = canvas.width - hero.radius;
}

function gameloop(){
    
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawCircle(hero,singerIMG);
    drawCircle(bala,bulletIMG);
    drawCircle(bala2,bullet2IMG);
    drawCircle(bala3,bullet3IMG);
    
    bala.y++;
    bala2.y++;
    bala3.y++;
   
    if (bala.y == 600){
        bala.x = Math.floor(Math.random() * 1340) + 20;
        bala.y = 0;  
    }
   
    if (bala2.y == 600){
        bala2.x = Math.floor(Math.random() * 1340) + 20;
        bala2.y = 0;
    }
    
    if (bala3.y == 600){
        bala3.x = Math.floor(Math.random() * 1340) + 20;
        bala3.y = 0;
    }
}

//SLEEP, TIMEOUT (?), DELAY

function drawCircle(circle,algo,isFill){
    
    ctx.drawImage(algo,
                  circle.x - circle.radius, 
                  circle.y - circle.radius, 
                  2*circle.radius,
                  2*circle.radius
                 )
    
    ctx.beginPath();
    ctx.strokeStyle = circle.color;
    ctx.fillStyle = circle.color;
    
    ctx.arc(circle.x,
            circle.y,
            circle.radius,
            0,
            2*Math.PI
           );
    
    ctx.stroke();
    if (isFill) ctx.fill();
    ctx.closePath();
}
