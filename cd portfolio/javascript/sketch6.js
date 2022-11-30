function setup() {
    createCanvas(400, 400);
  }
  
  function draw() 
  {
    
    background(220);
  
        for (j=0;j<10;j++)
          {
    
    
    for(i=0;i<10;i++)
      {
        if(i%2==0 && j%2==0)
        {fill(i*20,j*20,200)
        rect(40*i,j*40,50,50);}
        
         else if(i%2!=0 && j%2!=0)
        {fill(i*20,j*20,200)
        rect(40*i,j*40,50,50);}
      }
          
          
          }
  
  
  }