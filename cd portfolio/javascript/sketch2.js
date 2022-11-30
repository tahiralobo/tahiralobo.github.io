function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background(220);
    
    fill("#2196F3")
    rect(50+frameCount/10, 450-frameCount/10, 200, 160);
    
    fill("#009688")
    quad(25+frameCount/10, 450-frameCount/10, 275+frameCount/10, 450-frameCount/10, 200+frameCount/10, 320-frameCount/10, 100+frameCount/10, 320-frameCount/10, );
  
  
    
    fill("#3F51B5")
    rect(75+frameCount/10, 470-frameCount/10, 50, 50);
    rect(175+frameCount/10, 470-frameCount/10, 50, 50);
    rect(125+frameCount/10,540-frameCount/10,50,70);
    
    
    fill("#FEFEFF")
    line(90+frameCount/10,520-frameCount/10,90+frameCount/10,470-frameCount/10)
    line(110+frameCount/10,520-frameCount/10,110+frameCount/10,470-frameCount/10)
    
     line(190+frameCount/10,520-frameCount/10,190+frameCount/10,470-frameCount/10)
    line(210+frameCount/10,520-frameCount/10,210+frameCount/10,470-frameCount/10)
    
     line(125+frameCount/10,510-frameCount/10,75+frameCount/10,510-frameCount/10)
    line(125+frameCount/10,480-frameCount/10,75+frameCount/10,480-frameCount/10)
     line(125+frameCount/10,495-frameCount/10,75+frameCount/10,495-frameCount/10)
    
       line(225+frameCount/10,510-frameCount/10,175+frameCount/10,510-frameCount/10)
    line(225+frameCount/10,480-frameCount/10,175+frameCount/10,480-frameCount/10)
    line(225+frameCount/10,495-frameCount/10,175+frameCount/10,495-frameCount/10)
    
     circle(167+frameCount/10,575-frameCount/10,10)
      
    
    }