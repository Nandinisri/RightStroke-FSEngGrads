//Function with default parameters
function Greet(name: string, greeting: string = "Hello") : string {
    return greeting + ' ' + name + '!';
}

console.log(Greet('Steve'));//Hello Steve!
console.log(Greet('Steve', 'Hi')); //Hi Steve!
console.log(Greet('Bill')); //Hello Bil!

//Functions with  optinal parameters
function Gree(greeting: string, name?: string ) : string {
    return greeting + ' ' + name + '!';
}

console.log(Gree('Hello','Steve')); //Hello Steve!
console.log(Gree('Hi')); // Hi undefined!

//Function with rest parameters
function reet(greeting: string, ...names: string[]) {
    return greeting + " " + names.join(", ") + "!";
}

console.log(reet("Hello", "Steve", "Bill")); // returns "Hello Steve, Bill!"

console.log(reet("Hello"));// returns "Hello !"