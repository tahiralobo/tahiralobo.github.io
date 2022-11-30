//variable for  array of names
let uName = [  ]

//variable for array of marks

let uMarks = [ ]

// variable for input boxes / text boxes

let InpFName , InpMarks

// variable for submit button

let btnSubmit

// variable for target Slot
let targetSlot = 0


function setup() {
  createCanvas(400, 400);
 
 
  InpFName = createInput()
  InpFName.position(25, 370)
  InpFName.style("width", "150px")
 
  InpMarks = createInput()
  InpMarks.position ( 190, 370)
  InpMarks.style("width", "50px")
 
  btnSubmit = createButton("SUBMIT")
  btnSubmit.position( 270, 370)
  btnSubmit.style("width", "100px")
  btnSubmit.mousePressed(updateData)
 
}

function draw() {
  background(220);
 
  // display results  ----------------
  for(i=0; i < uName.length ; i++)
    {
      text ( uName[i], 25, 25*i+30 )      
      text ( uMarks[i] , 100 , 25*i+30)
    }
}

function updateData()
{
  //save the value of input box in array
  uName[targetSlot] = InpFName.value()
  uMarks[targetSlot] = InpMarks.value()
 
  //update target slot value
  targetSlot++
 
  // empty the text box
  InpFName.value("")
  InpMarks.value("")
 
}