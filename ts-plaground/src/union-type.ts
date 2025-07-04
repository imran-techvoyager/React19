let password: string | number;

type UserInfo = {
    name: string,
    age: number
};

type AccountDetails = {
    email: string,
    password: string
}

const user1: UserInfo | AccountDetails = {
    name: "imran ahmed",
    age: 23
};

console.log(`name: ${user1.name} and age: ${user1.age}`);