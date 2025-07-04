const person: {firstName: string; lastName: string; age: number;} = {
    firstName: "imran",
    lastName: "ahmed",
    age: 23
};

console.log(`name: ${person.firstName} ${person.lastName}, age: ${person.age}`);

function printUser(): {name: string; age: number} {
    return{
        name: "imran",
        age: 23,
    }
};

const res = printUser();
console.log(res);