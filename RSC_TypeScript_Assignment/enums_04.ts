export enum Days {
    Sunday = "Black",
    Monday = "White",
    Tuesday = "Grey",
    Wednesday = "Green",
    Thrusady = "Blue",
    Friday = "Red",
    Saturday = "Pink",
}
export class color{
    sky=(Day:String)=>{
         for(var d in Days){
            if(Day==d)
                console.log("color in "+d+" is "+ Days[d]);
            
         }
    }

}
let s:color = new color();
s.sky("Sunday");

