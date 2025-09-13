function calculate() {

    // YOUR CODE GOES HERE
    var num1 = Number(document.getElementById("number1").value);
    var num2 = Number(document.getElementById("number2").value);

    var sum = 0;


    if(num1 < num2){
        for(num1; num1<=num2; num1++){
            sum += num1;
        }
    }
    else{
        for(num2; num2<=num1; num2++){
            sum += num2;
        }
    }

    document.getElementById("result").innerHTML = `The sum is: ${sum}`;
}