function setup() {
    createCanvas(400, 400);
    background(220);
    
  }
  
  
  
  
  function draw() {
   
    if(mouseX<200 && mouseY<200)
      {fill("#009688")}
    
    else if(mouseX>200 && mouseY<200)
      {fill("#2196F3")}
    
    else if(mouseX>200 && mouseY>200)
      {fill("#00BCD4")}
    
    else
    {fill("#2C490A")}
    
    rect(mouseX,mouseY,20,20);
    
  
  }