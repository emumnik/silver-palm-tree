const users = [
    { name: 'Temo', age: 25 },
    { name: 'Lasha', age: 21 },
    { name: 'Ana', age: 28 }
];

function getYoungestPerson(users) {


    let youngestPerson = users[0];

    for (let i = 0; i < users.length; i++) {
        if (users[i].age < youngestPerson.age) {
            youngestPerson = users[i];
        }
    }

    return youngestPerson.name;
}

console.log(getYoungestPerson(users));




function cloneUser(user) {
    return Object.assign({}, user);
}

const originalUser = { name: 'Lasha', age: 21 };
const clonedUser = cloneUser(originalUser);

console.log(clonedUser);
console.log(clonedUser === originalUser);





function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}


function playGame() {
    
    let aTries = 0;
    let bTries = 0;
    
    
    let aRoll = 0;
    let bRoll = 0;

   
    while (aRoll !== 3) {
        aRoll = rollDie();
        aTries++;
    }

    
    while (bRoll !== 3) {
        bRoll = rollDie();
        bTries++;
    }

   
    if (aTries < bTries) {
        console.log(`Player A wins! It took ${aTries} tries.`);
    } else if (bTries < aTries) {
        console.log(`Player B wins! It took ${bTries} tries.`);
    } else {
        console.log(`It's a tie! Both players took ${aTries} tries.`);
    }
}


playGame();




