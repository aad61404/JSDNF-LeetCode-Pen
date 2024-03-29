var person = { firstname: 'Tony', lastname: 'Alicea'};
console.log(person);

person = new Object();
person.firstname = "Tony";
person.lastname = "Alicea";

// -------------
var Tony = {
    firstname: 'Tony',
    lastname: 'Alicea',
    address: {
        street: '111 Main St.',
        city: 'New York',
        state: 'NY'
    }
};

function greet(person) {
    console.log('Hi' + person.firstname);
}

greet(Tony);

greet({
    firstname: 'Mary',
    lastname: 'Doe'
})

Tony.address2 = {
    street: '333 Second St.'
}
console.log("**********");
console.log(Tony);