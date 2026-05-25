let display =document.getElementById("display");

function appendValue(input){
    display.value = display.value + input;
}

function clearDisplay(){
    display.value = "";
}

function calculatorResult(){
    try{
        display.value = eval(display.value);
    }
    catch(error)
    {
        display.value ="Error";
    }
}