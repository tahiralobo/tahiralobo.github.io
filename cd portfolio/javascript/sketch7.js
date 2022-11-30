let Hslider


function setup() {
  createCanvas(600, 600);
  Hslider = createSlider(1 , 9 , 3 )
  Hslider.position(400,500)
  Hslider.style('width', '160px')
}

function draw() {
  background(220);
  
  
  
  
for (m=0 ; m<6 ; m++)
  {
    
  for (i=0; i< Hslider.value() ; i++)
    { 
      if(i%2==1 && m%2==1 )
        {
          fill("green")
        }
      else if(i%2==0 && m%2==0)
        {
          fill("green")
        }
      else 
        {
          fill("blue")
        }
      rect( 60*i+20, 60*m, 50, 50 )
    }
    
  }
  
  




}