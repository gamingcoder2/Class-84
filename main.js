var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

var roverX=10;
var roverY=10;

var roverWidth=100;
var roverHeight=100;

var backgroundImg="mars.jpg";
var roverImg = "rover.png";

function Add(){
    backgroundImgTag=new Image();
    backgroundImgTag.onload=uploadBackground;
    backgroundImgTag.src=backgroundImg;

    roverImgTag=new Image();
    roverImgTag.onload=uploadRover;
    roverImgTag.src=roverImg;


} 

function uploadBackground(){
    ctx.drawImage(backgroundImgTag,0,0,canvas.width, canvas.height);   
}

function uploadRover(){
    ctx.drawImage(roverImgTag,roverX, roverY, roverWidth, roverHeight);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    console.log(e);
    keyPressed=e.keyCode;
    if(keyPressed=='38'){
        Up();
    }
    if(keyPressed=='40'){
        Down();
    }
    if(keyPressed=='37'){
        Left();
    }
    if(keyPressed=='39'){
        Right();
    }
}
