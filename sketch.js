        //https://editor.p5js.org/rios/sketches/60mJWGaWi
        //https://editor.p5js.org/lumar/sketches/ryqvb2crz
        //https://editor.p5js.org/navazin1@tcnj.edu/sketches/sBVydSQq4
        //https://stackoverflow.com/questions/61871332/can-i-animate-a-circle-moving-from-one-point-to-another-with-p5-js
        //https://p5js.org/examples/motion-non-orthogonal-reflection.html


var stars = [];
var shootingStars = [];

var starNum = 5000; //number of background stars
shootingStarNum = 1; //number of shooting stars

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
    
    
    for(var i = 0; i < shootingStarNum; i++){
        shootingStars.push(new shootingStar());
    }
  
}

function draw() {


    background(0);
  
    for(var i = 0; i < stars.length; i++){
    stars[i].display();
  }
    
    
    for(var i = 0; i < shootingStars.length; i++){
        shootingStars[i].display();
    }
    
    if(random(500) < 1){
        shootingStars.push(new shootingStar());
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

class shootingStar {
    
    constructor(){
        
        switch(getRandomInt(1,2)){
            case 1:
                this.P0 = createVector(random(-100,0),random(-100,0));
                this.P1 = createVector(random(width,width+20),random(height,height+20));
//                console.log("1");
                break;
            case 2:
                this.P0 = createVector(random(width,width+100),random(0,0-100));
                this.P1 = createVector(random(-100,0),random(height,height+100));
//                console.log("2");
                break;
            
            case 3:
                break;
        }
        
        this.startTime = millis() + 3000;
        this.endTime = this.startTime + 10000; // 3 seconds
        

        this.prevLocs = [];
        
}
    
    
    display(){
        
        this.pPX = this.PX;
        
        this.currentTIme = millis();
        this.scale = min(1, (this.currentTIme - this.startTime) / (this.endTime - this.startTime));

        this.V_dist = p5.Vector.sub(this.P1, this.P0).mult(this.scale);
        this.PX = p5.Vector.add(this.P0, this.V_dist);
        
        stroke(255);     
        
        if(this.prevLocs.length > 1){
            line(this.PX.x, this.PX.y, this.prevLocs[this.prevLocs.length-1].x, this.prevLocs[this.prevLocs.length-1].y);
        }
        
        ellipse(this.PX.x, this.PX.y, 4);
        
        this.prevLocs.push(this.PX);

    }
}




function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
