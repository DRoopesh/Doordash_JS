function operate(a,b,func){
    console.log("operate function starts");
    output = func(a,b)
    console.log("The result is : "+output);
    console.log("operate function ends");
}
function div(a,b){
    console.log("Div function start");
    output1 = b/a;
    console.log("Div function end");
    return output1
}
function mod(a,b){
    console.log("mod function start");
    output2 = b%a;
    console.log("mod function end");
    return output2
}
operate(10,20,div)
operate(10,20,mod)
