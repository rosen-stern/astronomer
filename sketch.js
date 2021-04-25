//Starry header

/*
TODO:
- Add random shooting stars in the background
- Add a floating wheatley? 

*/


        //https://editor.p5js.org/rios/sketches/60mJWGaWi
        //https://editor.p5js.org/navazin1@tcnj.edu/sketches/sBVydSQq4

var stars = [];
var starNum = 5000; //number of background stars
var pointColor = "";
var strokeColor = "";
var canvas;
var divID = "stars";

function windowResized() {
  //console.log('resized');
        	var clientHeight = document.getElementById(divID).clientHeight;
	var clientWidth = document.getElementById(divID).clientWidth;
    
  resizeCanvas(clientWidth, clientHeight);
}

function setup() {

    	var clientHeight = document.getElementById(divID).clientHeight;
	var clientWidth = document.getElementById(divID).clientWidth;
    
	var cnv = createCanvas(clientWidth, clientHeight);
	cnv.parent(divID);



  randomSeed(69);
 
    pointColor = color(98, 208, 222);
 strokeColor = color(218, 242, 245);
  
  
  for(var i = 0; i < starNum; i++){
    stars.push(new star());
  }
  
}

function draw() {


    background(0);
  
    for(var i = 0; i < stars.length; i++){
    stars[i].display();
  }

}



class star {
  
  constructor(){
    this.x = random(0, width);
    this.y = random(0, height);
    this.c = random(0, 255);
    this.twinkleDown = true;
    this.step = random(0.01,3);
  }
  
  display(){
    push();
    stroke(this.c);
    point(this.x,this.y);
    this.twinkle();
    pop();
  }
  
  twinkle(){
    
    if(this.twinkleDown){
      this.c-=this.step;
    } else {
      this.c+=this.step;
    }
    
    
    if(this.c <= 0){
      this.twinkleDown = false;
    } else if(this.c >= 255){
      this.twinkleDown = true;
    }
    
  }
  
}
