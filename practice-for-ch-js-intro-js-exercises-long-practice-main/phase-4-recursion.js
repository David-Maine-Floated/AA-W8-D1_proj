// Your code here
// [2,6]
// [2,3,4,5,6]
// function range(start, end, arr = []) {
//     // console.log(start, end)
//     if (start > end) {
//         console.log("hello");
//         return arr;
//     }

//     arr.push(start)
//     // console.log(arr)
//     range((start+1), end, arr)
// }


function range(start, end) {
    if (start === end) {
        return start 
    }
    // console.log(start)
    return [start].concat(range(start + 1, end))
}


// range(2,4)     
//  [2].push(range([3,4]))
//  .push(4)
//
//


console.log(range(2,6));


// function sumRec(arr) {
//     if (arr.length === 0) {
//         return 0
//     }
//     // console.log(arr);
//     return arr[0] + sumRec(arr.slice(1))
// }

// console.log(sumRec([1,2,3]))


