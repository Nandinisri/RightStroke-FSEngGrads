class Dog {  
    sound = "barking";  
}  
class Lion {  
    sound = "roaring";  
}  
class Goat {  
    sound = "bleat";  
    swim(){  
        console.log("Cannot Swim!");  
    }  
}  
let lion: Lion = new Dog(); 
console.log(lion.sound);
let dog: Dog = new Lion(); 
console.log(dog.sound);
let lionTwo: Lion = new Goat(); 
console.log(lionTwo.sound); 
//let goat: Goat = new Lion();  //This gets an errror
/*
barking
roaring
bleat
*/ 
