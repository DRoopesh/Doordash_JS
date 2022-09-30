var arr = [1,,2,3,,4,5]
// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);
// }

// for (const key in arr) {
//         console.log(arr);
// }

// for (const key in arr) {
//     console.log(arr[key]);
// }

// for (const key in arr) {
//     console.log(key+"   "+arr[key]);
// }

// for (const index of arr) {
//     console.log(arr);
// }

// for (const index of arr) {
//     console.log(arr[index]);
// }

// for (const index of arr) {
//     console.log(index+"    "+arr[index]);
// }

// arr.forEach((element, index, arr) => {
//     console.log(index+"     "+element+"   "+arr);
// });

arr.forEach((element, index, arr) => {
    console.log(index+"     "+element+"   "+arr[index]);
});

