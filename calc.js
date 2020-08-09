let preVal ="";
let newVal = "";
let mathOperator = "";
let resultVal="";
let decimalClicked = false;
let valMemStore = "";

function numButPress(num){
    
    if(resultVal){
        newVal = num;
        resultVal = "";
    } else{
        if(num === '.'){
            if(decimalClicked != true){
                newVal += '.';
                decimalClicked = true;
            }
        }else{
            newVal += num;
        }
    }

    document.getElementById("entry").value = newVal;

}

function mathButPress(operator){
    if(!resultVal){
        preVal = newVal;
    }else {
        preVal = resultVal;
    }

    newVal = "";
    decimalClicked = false;
    mathOperator = operator;
    resultVal = "";

    document.getElementById("entry").value = "";
}

function equalButPress(){
    decimalClicked = false;
    preVal = parseFloat(preVal);
    newVal = parseFloat(newVal);

    switch(mathOperator){
        case "+":
            resultVal = preVal + newVal;
            break;
        case "-":
            resultVal = preval - newVal;
            break;
        case "*":
            resultVal = preval * newVal;
            break;
        case "/":
            resultVal = preval / newVal;
            break;       
        default: 
        resultVal = newVal;
    }

    preval = resultVal;
    document.getElementById("entry").value = resultVal;
}

function clearButPress(){

    preVal ="";
    newVal = "";
    mathOperator = "";
    resultVal = "";
    decimalClicked = false;
    document.getElementById("entry").value = "0";
}

function copyButPress(){

    valMemStore = document.getElementById("entry").value;
}

function pasteButPress(){

    if(valMemStore){
        document.getElementById("entry").value = valMemStore;
        newVal = valMemStore;
    }
}