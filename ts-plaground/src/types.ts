type Person = {
    name: string;
    age: number;
}

type Employee = {
    id: number;
    title: string;
    married?: boolean;
}

type User = Person & Employee;

const user: Person = {
    name: "imran",
    age: 23,
};

console.log(`name: ${user.name} and age: ${user.age}`);

const users: User = {
    name: "username",
    age: 23,
    title: "frontend",
    id: 1,

};

console.log(`name: ${users.name} age: ${users.age} title: ${users.title}`)