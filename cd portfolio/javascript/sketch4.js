//global variables
let RndNumber
let userChoice

function setup() {
  createCanvas(400, 400);
  
  
RndNumber=round(random(0.5,3.5))
  
  userChoice = createInput('')
  userChoice.position(100,150)
}

function draw() {
  background(220);
  
frameRate(2)
textSize(15)
text('pick a number between 1-rock 2-paper 3-scissor',40,125)  


textSize(30)

//text(RndNumber,50,100)
//text (userChoice.value(), 150,250)
  let UC = userChoice.value();
  
  if(RndNumber == 1)
    {
      if(UC == 2)
        {
         text('You Win',150,350)
         }
      else if (UC == 3)
        {
          text('Computer wins',150,350)
        }
      else
        {
          text('Tie',150,350)
        }
    }
  
   else if(RndNumber == 2)
    {
      if(UC == 1)
        {
         text('Computer wins',150,350)
         }
      else if (UC == 3)
        {
          text('You Win',150,350)
        }
      else
        {
          text('Tie',150,350)
        }
    }
  
  else
    {
      if(UC == 1)
        {
         text('You Win',150,350)
         }
      else if (UC == 2)
        {
          text('Computer Wins',150,350)
        }
      else
        {
          text('Tie',150,350)
        }
    }
  
  
}