canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var backgrounds=["nasa image 1.jpg","nasa image 2.jpg","Nasa image 3.jpg","nasa image 4.jpg","mars.jpg"];
var randomnumber=Math.floor(Math.random() * 4);
console.log(randomnumber);


var rover_width= 100;
var rover_height= 90;

var rover_X=10;
var rover_Y= 10;

 background_image=backgrounds[randomnumber];
 rover_image="rover.png";

 function add()
{
background_img=new Image();
background_img.onload= uploadbackground;
background_img.src= background_image;

rover_img=new Image();
rover_img.onload=upload_rover;
rover_img.src= rover_image;



}

function uploadbackground(){
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);

}
function upload_rover(){    
    ctx.drawImage(rover_img,rover_X,rover_Y,rover_width,rover_height);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    var keypress=e.keyCode;
    console.log(keypress);
 if (keypress=='37'){
     left();
     console.log("Left Pressed");

 }
 if (keypress=='38'){
     up();
     console.log("Up Key");

 }
 if(keypress=='39'){
     right();
     console.log("right key");

 }
if (keypress=='40'){
    down();
    console.log("Down key");

}

}   
function up(){
    if (rover_Y >0){
        rover_Y= rover_Y-10;
        console.log("WHen Up arrow is pressed the x="+ rover_X+ " And Y = "+ rover_Y);
        uploadbackground();
        upload_rover();
    }
}
    function down(){
        if (rover_Y<=500){
            rover_Y= rover_Y+10;
            console.log("When down arrow is pressed the x="+rover_X+" and Y ="+rover_Y);
            uploadbackground();
            upload_rover();

        }

    }
    function right(){
        if ( rover_X<=700){
        rover_X=rover_X+10;
        console.log("When right Arrow key is pressed the X="+rover_X+" and  Y "+rover_Y);
        uploadbackground();
        upload_rover();
    }
    }
    function left(){
    if (rover_X>0){
        rover_X=rover_X-10;
        console.log("When left arrow clicked the X is "+ rover_X+" and Y= "+ rover_Y);
        uploadbackground();
        upload_rover();
    }
    }
                          
   