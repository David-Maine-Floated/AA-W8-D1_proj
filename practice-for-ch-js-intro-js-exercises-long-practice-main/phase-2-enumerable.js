// Your code here


Array.prototype.myEach = function(callback) {
    i = 0;
    while (i < this.length) {
        callback(this[i]);
        i++
    };
};

// Array.prototype.myMap = function(callback) {
//     i = 0;
//     result = [];
//     while (i < this.length) {
//         result.push(callback(this[i]));
            // i++
//     }
//     return result; 
// };
console.log('hello')

Array.prototype.myReduce = function(callback, initialValue = 0) {
    let accumulator;
    let i;


    if (!initialValue && initialValue !== 0) {
        accumulator = this[0]
        i = 1

    }
    else { 
        accumulator = initialValue
        i = 0
    }
   
    while (i < this.length) {
        accumulator = callback(accumulator, this[i])
        i++
    }

    return accumulator 
}

// console.log('hello')
// console.log([1, 2, 3].myReduce(function(acc, el) {
//   return acc + el;
// }))

// console.log([1, 2, 3].myReduce(function(acc, el) {
//   return acc + el;
// }, 25))

console.log([1,2,3].myEach((el)=> console.log(el)));