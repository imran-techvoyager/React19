function getRandomKeyValuePairs<T>(obj: {[key: string]: T}): {key: string; value: T} {
    const keys = Object.keys(obj);//returns array of all keys in the objct as string
    const randKey = keys[Math.floor(Math.random()* keys.length)];

    return {key: randKey, value: obj[randKey]}
};

const stringObject = {a: "apple", b: "banana", c: "carrot"}
const numberObject = {one: 1, two: 2, three: 3}

console.log(getRandomKeyValuePairs<string>(stringObject));
console.log(getRandomKeyValuePairs<number>(numberObject));

function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
    return array.filter((item) => condition(item));
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const stringArr = ["imran", "roy", "ahmed", "ria"]

const res1 = filterArray<number>(arr, (num) => num % 2 === 0);
const res2 = filterArray<string>(stringArr, (str) => str.length > 3);

console.log(res1);
console.log(res2);

interface Fruits {
    name: string;
    color: string;
};

const fruits: Fruits[] = [
    {name: "apple", color: "red"},
    {name: "banana", color: "yellow"},
    {name: "cherry", color: "red"}
];

const res3 = filterArray<Fruits>(fruits, (fruit) => fruit.color === "red");
console.log(res3);