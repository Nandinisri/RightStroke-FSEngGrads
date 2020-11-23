abstract class car{
    private color;
    private Engine;
    private  Capacity;
    private cylinders;
    constructor(color:String,Engine:String,Capacity:Number,cylinders:number){
         this.color=color;
         this.Engine=Engine;
         this.Capacity=Capacity;
         this.cylinders=cylinders;
    }
    Accelarate=()=>{
        return `The car is accelerating through ${this.Engine}`;
    }
    OpenCarLock=()=>{
        return "The car door is opened";
    }
    CloseCarLock=()=>{
        return "The car door is closed";
    }
    abstract startcar(): string;

    abstract stopcar(): string;
}
 
class shv extends car {
    private carname:String;
    constructor(carname:String,color:String,Engine:String,Capacity:Number,cylinders:number){
          super(color,Engine,Capacity,cylinders);
          this.carname=carname;
    }
    startcar():string{
        return `The ${this.carname} is started`;
    }
 
    stopcar(): string{
        return `The ${this.carname} is stopped`;
    }

}
class sedan extends car{
    private carname:String;
    constructor(carname:String,car_color:String,Engine:String,Capacity:Number,Noofcylinders:number){
          super(car_color,Engine,Capacity,Noofcylinders);
          this.carname=carname;
    }
    startcar():string{
        return `The ${this.carname} is started`;
    }
 
    stopcar(): string{
        return `The ${this.carname} is stopped`;
    }
}
class Hatchback extends car{
    private carname:String;
    constructor(carname:String,car_color:String,Engine:String,Capacity:Number,Noofcylinders:number){
          super(car_color,Engine,Capacity,Noofcylinders);
          this.carname=carname;
    }
    startcar():string{
        return `The ${this.carname} is started`;
    }
 
    stopcar(): string{
        return `The ${this.carname} is stopped`;
    }
}
 
let emp:car = new shv("shv","Grey","nd-23",23,34);
console.log(emp.OpenCarLock());
console.log(emp.CloseCarLock());
console.log(emp.startcar());
console.log(emp.Accelarate());
console.log(emp.stopcar());
console.log('-------------------------');
let emp1:car = new sedan("sedan","white","Ng-23",29,39);
console.log(emp1.OpenCarLock());
console.log(emp1.CloseCarLock());
console.log(emp1.startcar());
console.log(emp1.Accelarate());
console.log(emp1.stopcar());
console.log('-------------------------');
let emp3:car = new Hatchback("Hatchback","Black","M-23",13,24);
console.log(emp3.CloseCarLock());
console.log(emp3.OpenCarLock());
console.log(emp3.startcar());
console.log(emp3.Accelarate());
console.log(emp3.stopcar());
