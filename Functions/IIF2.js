(sum = function(a,b,c,d){
    console.log(a+b+c+d);
    console.log(arguments);
})(1,2,3,4,5,6,8)
(sum1 = function(a,b,c){
    console.log(a+b+c);
    console.log(arguments);
})(1,2,3,4,5,6)