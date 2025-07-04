"use strict";
const person = {
    firstName: "imran",
    lastName: "ahmed",
    age: 23
};
console.log(`name: ${person.firstName} ${person.lastName}, age: ${person.age}`);
function printUser() {
    return {
        name: "imran",
        age: 23,
    };
}
;
const res = printUser();
console.log(res);
