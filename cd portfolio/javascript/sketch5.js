function setup() {
    createCanvas(400, 400);
  }
  
  function draw() 
  {
    
    background(220);
  
        for (j=0;j<16;j++)
          {
    
    
    for(i=0;i<16;i++)
      {
        fill(i*20,j*20,200)
        rect(45*i,j*45,50,50);
      }
          
          
          }
  
  
  }