// Your code here

Array.prototype.uniq = function() {
    let newArr = [];
    this.forEach(function(el, i) {
         console.log(i)
        if (!newArr.includes(el)) {
    
            newArr.push(el)
        }
    })
    return newArr
}

// Array.prototype.twoSum =  function() {
//     result = []
//     console.log(this) 
//     this.forEach((el1, i1) => {
//         console.log(this)
//         this.forEach((el2, i2) =>{
//             console.log('inner this', this)
//             if (i2 > i1) {
//                 if (el1 + el2 === 0) {
//                     result.push([el1, el2])
//                 }
//             }
//         })
//     })
//     return result 
// }


Array.prototype.twoSum = function() {
    result = []
    
    for(i=0; i < this.length - 1; i++) {
        for(j=i+1; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                result.push([i,j])
            }
        }
    }
    return result 
}

Array.prototype.transpose = function() {
    result = []

    for(i=0; i < this.length; i++) {
        newArr = []
        for(j=0; j < this.length; j++) {
            newArr.push(this[j][i])
        }
        result.push(newArr)
    }
    return result 
}

// console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose())


Array.prototype.myEach(callback) {
    i = 0;
    while (i < this.length) {
        callback(this[i]);
    };
};

Array.prototype.myMap(callback) {
    i = 0;
    result = [];
    while (i < this.length) {
        result.push(callback(this[i]));
    }
    return result; 
};

