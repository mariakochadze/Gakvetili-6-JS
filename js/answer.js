let answer = () =>{
    let answers = document.getElementById("gamosaxuleba").innerHTML;

    console.log(answers);

    let num1,num2, sum;

    if(answers.includes("−")){
        num1 = answers.slice(0,answers.indexOf("−"));
        num2 = answers.slice(answers.indexOf("−")+1, answers.length);

        sum = num1-num2;
        console.log(num1,num2,sum)

    }
    else if(answers.includes("+")){
        num1 = answers.slice(0,answers.indexOf("+"));
        num2 = answers.slice(answers.indexOf("+")+1, answers.length);

        sum = num1+num2;
        console.log(num1,num2,sum)
    }
        
    else if(answers.includes("×")){
        num1 = answers.slice(0,answers.indexOf("×"));
        num2 = answers.slice(answers.indexOf("×")+1, answers.length);

        sum = num1*num2;
        console.log(num1,num2,sum)
    }
    else if(answers.includes("×")){
        num1 = answers.slice(0,answers.indexOf("×"));
        num2 = answers.slice(answers.indexOf("×")+1, answers.length);

        sum = num1*num2;
        console.log(num1,num2,sum)
    
    
}
}