console.log("Ding Dong");

// first assignment compareNumbers

function compareValues(a, b) {
    if (a == b) {
        return "equal"
    } else {
        return "Not equal"
    }
}


console.log(compareValues(5, "5"))
console.log(compareValues("ding", "DONG"))
console.log(compareValues(true, 1))
console.log(compareValues(null, undefined))




// Second assignment fahrenheitToCelsius

function fahrenheitToCelsius(fahrenheit) {
   
    if (typeof fahrenheit === 'string') {
        return false
    }

    
    let celsius = (fahrenheit - 32) * 5 / 9

    return celsius
}


console.log(fahrenheitToCelsius(32)) 
console.log(fahrenheitToCelsius("32"))


// Third assignment performOperation


function performOperation(a, b, operation) {
   
    if (typeof a === 'string' || typeof b === 'string') {
        return false
    }

    let result
    
    switch (operation) {
        case '+':
            result = a + b
            break
        case '-':
            result = a - b
            break
        case '*':
            result = a * b
            break
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

