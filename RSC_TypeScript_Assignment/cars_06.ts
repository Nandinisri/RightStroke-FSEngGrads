export class car{
    private car_color;
    private Engine;
    private  Capacity;
    private Noofcylinders;
    constructor(car_color:String,Engine:String,Capacity:Number,Noofcylinders:number){
         this.car_color=car_color;
         this.Engine=Engine;
         this.Capacity=Capacity;
         this.Noofcylinders=Noofcylinders;
    }
    StartCar=()=>{
        return "The car is started";
    }
    StopCar=()=>{
        return "The Car is stopped";
    }
    Accelarate=()=>{
        return "The car is accelerating";
    }
    OpenCarLock=()=>{
        return "The car door is opened";
    }
    CloseCarLock=()=>{
        return "The car door is closed";
    }
}
let d:car = new car("Black","Hcc Enginee 123",50,8);
console.log(d.OpenCarLock())
console.log(d.CloseCarLock());
console.log(d.StartCar());
console.log(d.Accelarate());
console.log(d.StopCar());

/*
The car door is opened
The car door is closed
The car is started
The car is accelerating
The Car is stopped
*/
