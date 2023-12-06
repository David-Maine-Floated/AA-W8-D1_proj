// Your code here

Array.prototype.bubbleSort = function() {
    // let result = []
    let sorted = false

    while (!sorted) {
        sorted = true 
        for (let i=0; i < this.length - 1; i++) {
            if(this[i] > this[i+1]) {
                [this[i], this[i+1]] = [this[i+1], this[i]]
                sorted = false   
            }
        }
    }
    return this; 
}


console.log([3,2,1,0].bubbleSort())



arr1 = [1,2,3,4]
Array.prototype.substring = function() {
    result = [];
    for(let i=0; i < this.length; i++) {
        for(let j = i + 1; j < this.length; j++) {
            result.push(this.slice(i, j+1))
        }
    }
    return result 
}

console.log(arr1.substring())