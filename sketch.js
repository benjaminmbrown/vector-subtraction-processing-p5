 

function setup() {
  createCanvas(300, 300);

}

function draw() {
	background(255);
	var mouse = createVector(mouseX,mouseY);
	var center = createVector(width/2, height/2);

	mouse.sub(center);
	translate(width/2, height/2);
	line(0,0,mouse.x, mouse.y);


}

