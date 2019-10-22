/**
 * SlowMath Library
 * Covalence, LLC
 */
let slowMath = (function() {
    const wait = (delay) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, delay);
        });
    };

    function add(a, b) {
        return wait(1000)
        .then(() => {
            return negativeCheck(a, b);
        }).then((shouldResolve) => {
            if (shouldResolve) {
                return Promise.resolve(+a + +b);
            } else {
                return Promise.reject(new Error(`Error adding values ${a} and ${b}.`));
            }
        });
    }

    function subtract(a, b) {
        return wait(1000)
        .then(() => {
            return negativeCheck(a, b);
        }).then((shouldResolve) => {
            if (shouldResolve) {
                return Promise.resolve(a - b);
            } else {
                return Promise.reject(new Error(`Error subtracting values ${a} and ${b}.`));
            }
        });
    }

    function multiply(a, b) {
        return wait(1000)
        .then(() => {
            return negativeCheck(a, b);
        }).then((shouldResolve) => {
            if (shouldResolve) {
                return Promise.resolve(a * b);
            } else {
                return Promise.reject(new Error(`Error multiplying values ${a} and ${b}.`));
            }
        });
    }

    function divide(a, b) {
        return wait(1000)
        .then(() => {
            return negativeCheck(a, b);
        }).then((shouldResolve) => {
            if (+b === 0) {
                return Promise.reject(new Error('Cannot divide by zero.'));
            } else if (shouldResolve) {
                return Promise.resolve(a / b);
            } else {
                return Promise.reject(new Error(`Error dividing ${a} by ${b}.`));
            }
        });
    }

    function remainder(a, b) {
        return wait(1000)
        .then(() => {
            return negativeCheck(a, b);
        }).then((shouldResolve) => {
            if (+b === 0) {
                return Promise.reject(new Error('Cannot divide by zero for remainder.'));
            } else if (shouldResolve) {
                return Promise.resolve(a % b);
            } else {
                return Promise.reject(new Error(`Error dividing ${a} by ${b} for remainder.`));
            }
        });
    }

    function negativeCheck(a, b) {
        return a > -1 && b > -1;
    }

    return { add, subtract, multiply, divide, remainder };
})();

let slowPromise = new Promise(function(resolve){
   resolve(slowMath.add(6,2))
}).then(function(result){
    console.log(result)
    return slowMath.multiply(result, 2)
}).then(function(result){
    console.log(result)
    return slowMath.divide(result,4)
}).then((result)=>{
    console.log(result)
    return slowMath.subtract(result,3)
}).then((result)=>{
    console.log(result)
    return slowMath.add(result,98)
}).then((result)=>{
    console.log(result)
    return slowMath.remainder(result,2)
}).then((result)=>{
    console.log(result)
    return slowMath.multiply(result,50)
}).then((result)=>{
    console.log(result)
    return slowMath.remainder(result,40)
}).then((result)=>{
    console.log(result)
    return slowMath.add(result,32)
}).then((result)=>{
    console.log(`the final result is: ${result}!`)
}).catch((error)=>{
    console.log(error)
})
slowPromise

// async function doMath(){
//     try{
//     let math = await slowMath.add(6,2)
//     console.log(math)
//     math = await slowMath.multiply(math,2)
//     console.log(math)
//     math = await slowMath.divide(math,4)
//     console.log(math)
//     math = await slowMath.subtract(math,3)
//     console.log(math)
//     math = await slowMath.add(math,98)
//     console.log(math)
//     math = await slowMath.remainder(math, 2)
//     console.log(math)
//     math = await slowMath.multiply(math,50)
//     console.log(math)
//     math = await slowMath.remainder(math, 40)
//     console.log(math)
//     math = await slowMath.add(math, 32)
//     console.log(`the result is: ${math}!`)
//     }
//     catch(error){
//         console.error(error)
// }

// }

// doMath()


