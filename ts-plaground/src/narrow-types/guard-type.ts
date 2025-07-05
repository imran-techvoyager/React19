type MyType = string | number;

function guardedType(value: MyType){
    if(typeof value === "string"){
        console.log(value.toUpperCase());
       }else{
         console.log(value.toFixed(3));
       }
}

guardedType(20);
guardedType("imran");