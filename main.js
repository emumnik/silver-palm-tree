console.log("Ding Dong");

// first assignment

function calculate(a, b){
    if(typeof a === 'string' || typeof b === 'string'){
        return "error in matrix"
    }
    return a + b
}

console.log(calculate(9, 1))
console.log(calculate("9", 1))
console.log(calculate(9, "1"))


// Second assignment

function fahrenheitToCelsius(fahrenheit) {
   
    if (typeof fahrenheit === 'string') {
        return false
    }

    
    let celsius = (fahrenheit - 32) * 5 / 9

    return celsius
}


console.log(fahrenheitToCelsius(32)) 
console.log(fahrenheitToCelsius("32"))


// Third assignment


function performOperation(a, b, operation) {
   
    if (typeof a === 'string' || typeof b === 'string') {
        return false;
    }

    let result;
    
    switch (operation) {
        case '+':
            result = a + b
            break;
        case '-':
            result = a - b
            break;
        case '*':
            result = a * b
            break;
        case '/':
            if (b === 0) {
                return false
            } 
                result = a / b
            
            break
        
    }

    return result
}


console.log(performOperation(5, 3, '+'))
console.log(performOperation(5, 3, '-')) 
console.log(performOperation(10, 4, '*'))
console.log(performOperation(8, 2, '/'))
console.log(performOperation(6, 0, '/')) 
console.log(performOperation("9", "2", '*'))

