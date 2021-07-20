window.onload = function(){
   
    var exhibitb= document.getElementById("Exhibit B");
    var exhibitc = document.getElementById("Exhibit C");
    var exhibitd = document.getElementById("Exhibit D");
    var exhibite = document.getElementById("Exhibit E");

    var choice = document.getElementById("sequence");

    var button = document.getElementById("btnDisplaySequence");

    button.onclick = function mychoice() {
      //if the option selected is equal to Fibonacci Sequence, perform the 
      //Fibonacci Sequence using the while loop method
      //choice.value
     
      if(choice.value == "fibonacci"){
      let num1=0, num2=1, next;
      let  fibonacciSequenceText = num1 + ","
      while(num1 < 40){
        fibonacciSequenceText += num1 + ","

        next = num1 + num2;
         num1 = num2;
        num2 = next;
      
      }
//To remove the last comma sign(,) from the front of the last character
      let slicedfibonaccilastchar = fibonacciSequenceText.slice(0, -1);

      exhibitb.innerHTML =  slicedfibonaccilastchar; 
      return false

    }
     //Else if the choice value is equal to even
    if(choice.value == "even"){
      let j= 2;
    let evennum = "";
    do {
      evennum +=  + j + ",";
      
      //to increase by an addition of one.
      j++;
    //To increase by an addition of one once more.
    j++;
    

  } 
    while(j < 20);
    
   let slicedevennum= evennum.slice(0, -1);
   exhibitc.innerHTML = slicedevennum; 
return false
    }





    //else if the choice value from the selection box option is  odd

if(choice.value == "odd"){
let oddnum = "";
  for(let i=1; i<20; i++,i++){
   oddnum+=  + i + ",";
  }
  
  let slicedoddnum= oddnum.slice(0, -1);
   exhibitd.innerHTML = slicedoddnum; 

  return false;
}
//If the select option is choosen to be select.
if(choice.value == "select"){
alert("Invalid selection, please try again!");
  exhibite.innerHTML = "<b>Invalid selection, please try again!</b>";

} 


    
    
    }


 }