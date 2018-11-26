// const sum = () => {

// }

function sum() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

const sum2 = (...args) => {
    // let sum = 0;
    // args.forEach( el =>{
    //     sum += el;
    // })
    // return sum;
    return args.reduce((acc, el) => acc + el)
}

// console.log(sum2(1,22,34))

Function.prototype.myBind = function() {
    let arr = Array.from(arguments);
    return (...args) => {
        this.call(arr[0], ...arr.slice(1), ...args);
    }
}

const curriedSum = (numArgs) => {

    let numArgs2 = numArgs
    let numbers = [];

    return function _curriedSum(int){
        numArgs2 -= 1;
        numbers.push(int);
        if(numArgs2 === 0){
            return numbers.reduce((acc, el) => acc + el);
        } else {
            return _curriedSum
        }
    }
}

Function.prototype.curry = function(numArgs) {
    let num = numArgs
    let arr = [];

    const curriedSum = (int) => {
        num -= 1;
        arr.push(int);
        if (num === 0){
            return this(...arr);
        } else {
            return curriedSum;
        }
    }

    return curriedSum;


//     let arr = Array.from(arguments)
//     let numArgs1 = arr[0]
//     // on first pass, arr[0] is numArgs1
    
//     if (arr.length-1 < numArgs1) {
//         return this.curry.bind(this, ...arr);
//     } else if (arr.length-1 === numArgs1) {
//         let toUse = arr.splice(1);
//         return this.apply(this, toUse);
//     }
// /////////////////


//     if(!this.numArgs){
//         this.nums = [];
//         this.numArgs = numArgs
//         return this.curry.bind(this);
//     }   else {
//         this.nums.push(numArgs);
//         if(this.nums.length < this.numArgs) {
//             return this.curry.bind(this);
//         } else {
//             return this.apply(this, this.nums);
//         }
//     }

}

const sumNums = (...args) => {
    return args.reduce((acc, el) => acc + el);
}

let a = sumNums.curry(3);
a = a(7);
a = a(5);
a = a(9);