//insert-numbers-and-operators
function test1(numb){
    var x = document.getElementById("history-val");
    var y = document.getElementById("output-val");
    if(y.value == ""){
        x.value += numb.value;
    }else{
        x.value = "";
        y.value = "";
        x.value += numb.value;
    }
}

function test3(numb){
    var x = document.getElementById("history-val");
    var y = document.getElementById("output-val");
    if(y.value == ""){
        x.value += numb.value;
    }else{
        x.value = "";
        x.value = y.value + numb.value;
        y.value = "";
    }
}

//get-result
function test2(){
    var x = document.getElementById("history-val");
    var y = document.getElementById("output-val");
    y.value = eval(x.value);
}

//clear
function clearAll(){
    var x = document.getElementById("history-val");
    var y = document.getElementById("output-val");
    x.value = "";
    y.value = "";
}

/*
lw hzwd backspace button

var x = document.getElementById("history-val").value;
delete x[x.length-1];



*/