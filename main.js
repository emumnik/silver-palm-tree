def expo(base, exponent, callback):
    if exponent == 0:
        return callback(1)
    elif exponent == 1:
        return callback(base)
    else:
        return expo(base, exponent - 1, lambda x: callback(base * x))

result = expo(5, 3, lambda x: x)
print(result) 



function deepCopyAsync(obj) {
    return new Promise((resolve, reject) => {
        if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
            reject(new Error('Argument is not a valid object'));
            return;
        }
        try {
            const copiedObject = JSON.parse(JSON.stringify(obj));
            resolve(copiedObject);
        } catch (error) {
            reject(error);
        }
    });
}
(async () => {
    try {
        const original = { a: 1, b: { c: 2 } };
        const copied = await deepCopyAsync(original);
        console.log('Original:', original);
        console.log('Copied:', copied);
    } catch (error) {
        console.error('Error:', error.message);
    }
})();
