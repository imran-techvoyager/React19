interface User1 {  //this is used similar to types
    name: string,
    age: number,
};

//interfaces for functions

interface MathOperations {
    (x: number, y: number): number;
};

const add: MathOperations = (a, b) => a + b;

const result = add(2, 3);

console.log(result);

interface Movie {
    name: string,
    rating: number,
    printMovieInfo(name: string, rating: number, price: number): string | number;
}

interface MovieGenre extends Movie{
    genre: string;
}

const movie1: MovieGenre = {
    name: "fight club",
    genre: "action",
    rating: 5,
    printMovieInfo(name: string, rating: number, price: number){
        return `movie name: ${name} price: ${price} and rating: ${rating}`
    }
}

console.log(movie1);