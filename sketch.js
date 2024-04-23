function setup() {
    createCanvas(600, 600);
      background("white");
  
  }
  
  function draw() {
  
    stroke("purple");
    fill("red");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 70, 90);
    }
  }  