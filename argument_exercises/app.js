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