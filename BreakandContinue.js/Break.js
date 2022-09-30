var arr = ["Hi", "Hello", 100, '#', true]
for (i=0; i<arr.length; i++) {
    if(i>2){
        console.log(i);
        break
    }
    console.log(arr[i]);
}