let canvas = document.getElementById("myCanvas")
let button = document.getElementById("clear")

canvas.width = 600;
canvas.height = 600;

let context = canvas.getContext("2d")

/*
context.beginPath()
context.moveTo(0,0)
context.lineTo(200,250)
context.stroke()
context.closePath()
*/

var cKeyPressed;
var sKeyPressed;

button.onclick = function (){
context.clearRect(0,0,canvas.width,canvas.height)
}

setInterval(drawShapes,50)

function drawShapes(){
  if(cKeyPressed){
  drawCircle()
  }

  if(sKeyPressed){
    drawRect()
  }
}

function drawCircle(){

var color = getRandomColor(1.0);
var circleSize = getRandomInt(5,20);

var randomXPosition = getRandomInt(0,canvas.width);
var randomYPosition = getRandomInt(0,canvas.height);context.beginPath();
context.arc(randomXPosition, randomYPosition, circleSize, 0, Math.PI*2);
context.fillStyle = color;

context.fill();
}

function drawRect(){
var color = getRandomColor(1.0);
var rectSize = getRandomInt(5,20);

var randomXPosition = getRandomInt(0,canvas.width);
var randomYPosition = getRandomInt(0,canvas.height);
context.beginPath();
context.rect(randomXPosition, randomYPosition, rectSize, rectSize);
context.fillRect = color;
context.fillStyle = getRandomColor(1.0)
context.fill();
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomColor(alpha){ 
 let red = Math.floor(getRandomInt(0,255));
 let green = Math.floor(getRandomInt(0,255));
 let blue = Math.floor(getRandomInt(0,255));

 return "rgba("+ red + "," + green + "," + blue +"," + alpha+ ")";
}

document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("keyup",keyUpHandler,false);

function keyDownHandler(e){
  if(e.keyCode == 67){
    cKeyPressed = true;
  }  
  if(e.keyCode == 83){
    sKeyPressed = true;
  }  
}
function keyUpHandler(e){
  if(e.keyCode == 67){
    cKeyPressed = false;
  }
  if(e.keyCode == 83){
    sKeyPressed = false;
  }
} 