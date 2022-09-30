var compareage = (a,b) => {
    if(a>b){
        return "a is elder than b"
    }
    else if(b>a){
        return "b is elder than a"
    }
    else{
        return "a and b are of same age"
    }
}
console.log(compareage(10,10));