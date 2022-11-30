let slider
let radio, shape
let colora,colorb
function setup() {
  createCanvas(600, 600);
  slider = createSlider(1, 10, 1);
  slider.position(35, 10);
  slider.style('width', '330px');
  radio = createRadio();
  radio.option("rect");
  radio.option("circle");
  radio.selected("rect")
  radio.style('width', '60px');
  radio.position(400, 13)
  
  colora=createColorPicker('#ed225d')
  colorb=createColorPicker('#3C0012')
  colora.position(400,70);
  colorb.position(400,100);
}


function draw() {

  background(255)
  for(j=0;j<slider.value();j++) 
    {
      for (i=0; i<slider.value(); i++)
      {
        if(i%2==0 && j%2==0)
          {
        fill (colora.color())
          }
        else if(i%2!=0 && j%2!=0)
          {
        fill (colorb.color())
          }
        
        
        
        
        if(radio.value()=="rect")
          {
              rect(i*32+40, j*32+40, 32)  
          }
        else{
          circle(i*32+60, j*32+60, 32)
        }

      }
    }
  
}