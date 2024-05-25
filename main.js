function calculateArray(n) {
    if (n <= 2) {
        return 'Invalid input. Please enter a number greater than 2.';
    }

    const sumFirstSecond = 1 + 2;

    const numbers = Array.from({ length: n - 2 }, (_, i) => i + 3);

    const productFromThird = numbers.reduce((product, number) => product * number, 1);

    return [sumFirstSecond, productFromThird];
}

const result = calculateArray(5);
console.log(result);


function getCity(user) {
    return user?.banks?.[2]?.address?.city;
}

const user1 = {
    banks: [
        { address: { city: 'City1' } },
        { address: { city: 'City2' } },
        { address: { city: 'City3' } }
    ]
};

const user2 = {
    banks: [
        { address: { city: 'City1' } },
        { address: { city: 'City2' } }
    ]
};

console.log(getCity(user1));
console.log(getCity(user2));


function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const original = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        zip: '10001'
    },
    hobbies: ['reading', 'traveling']
};

const cloned = deepClone(original);

console.log(cloned);
console.log(cloned === original);
console.log(cloned.address === original.address);
console.log(cloned.hobbies === original.hobbies);
