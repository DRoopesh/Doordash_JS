var arr = [1,2,3,4,5,6]
console.log(arr);
console.log(arr.some((element)=>{
    return element < 5
}))
console.log(arr);