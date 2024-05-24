function calculate(vashli){
    console.log(vashli.innerHTML);
    let buttonvalue = vashli.innerHTML;
    let answervalue = document.getElementById("answer").innerHTML;
    let gamosvalue = document.getElementById("gamosaxuleba").innerHTML;

    console.log(buttonvalue,answervalue,gamosvalue);


  

    if(answervalue == "0"){
        document.getElementById("answer").innerHTML = "";

    } 
    if(answervalue == "0"){
        document.getElementById("gamosaxuleba").innerHTML = "";

    } 
    
    
    document.getElementById("gamosaxuleba").innerHTML += buttonvalue;
    document.getElementById("answer").innerHTML += buttonvalue;
 
    let answerlenght = document.getElementById("answer").innerHTML.length;
    if(answerlenght >= 15)
 
    console.log(answerlenght);
    
    let gilakebi = document.querySelectorAll(".calculate");

    console.log(gilakebi);
    
    gilakebi.foreach(msxali => {
        console.log(msxali);
    });
    

} 
