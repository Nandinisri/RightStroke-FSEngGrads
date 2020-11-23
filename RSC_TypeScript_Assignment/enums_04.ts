export enum Days {
    Sunday = "Sky blue",
    Monday = "White",
    Tuesday = "Grey",
    Wednesday = "Light Green",
    Thrusady = "Blue",
    Friday = "Red",
    Saturday = "Yellow",
}
export class Skycolor{
    sky=(Day:String)=>{
         for(var d in Days){
            if(Day==d)
                console.log("The sky color in "+d+" is "+ Days[d]);
            
         }
    }

}
let s:Skycolor = new Skycolor();
s.sky("Monday");

//The sky color in Monday is White