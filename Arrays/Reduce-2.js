var arr = [20, 30, 40, 50,60]
console.log(arr);
function demo1(a,b){
    return b-a
}
console.log(arr.reduce(demo1));
console.log(arr);
