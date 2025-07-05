//how we used to write without generics

function printString(item1: string, item2: string): [string, string]{
        return [item1, item2];
}  //here in this function it is taking 2 params of type string also and returning string array

console.log(printString("imran", "ahmed"));

//the above problem can be solved using generics

function printAnything<type>(item1: type, item2: type): [type, type] {
    return [item1, item2];
};

console.log(printAnything<boolean>(true, true));
console.log(printAnything<string>("true", "true"));
console.log(printAnything<number>(1, 2));