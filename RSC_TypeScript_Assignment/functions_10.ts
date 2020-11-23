function Greetng(name: string, g: string = "Hello") : string {
    return g + ' ' + name + '!';
}

console.log(Greetng('Nandini'));
console.log(Greetng('Nandini', 'Hi')); 
console.log(Greetng('Srivastava')); 

function Greetg(g: string, name?: string ) : string {
    return g + ' ' + name + '!';
}

console.log(Greetg('Hello','Nandini')); 
console.log(Greetg('Hi')); 

function Re(g: string, ...names: string[]) {
    return g + " " + names.join(", ") + "!";
}

console.log(Re("Hello", "Steve", "Bill")); 
console.log(Re("Hello"));
