function setup() {
    createCanvas(400, 400);
    background("#BF21DA");
  }
  
  function draw() {
    stroke("black");
    fill("yellow");
    
    if(mouseIsPressed) {
      rect(mouseX, mouseY, 20, 20);
  }
  }