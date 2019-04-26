alert('Hello');


let surName;

const userName = 'Jone';

alert(userName);

const userAge = parseFloat(prompt('Enter youe age'));

if (Number.isNaN(userAge)) {
    alert('Incorect input. Please refresh page!');
}

const message = 'Your age is ' + userAge;

alert(message);

const newAge = addOne(userAge);

alert(newAge);


// Number -  NaN, infinity
// String 

// Bolean: true. false
// underfined;

// null

// object

// From 2015;
// Symbol

if (userAge < 18) {
    alert('You are not adult');
} else if (userAge > 80 && userAge < 100) {
    alert('You are between 80 and 100');
} else if (userAge > 100) {
    alert('You have seen a lot in your life');
} else {
    alert('You are adult');
}

function addOne (num) {
const result = num +1;
return result;
};