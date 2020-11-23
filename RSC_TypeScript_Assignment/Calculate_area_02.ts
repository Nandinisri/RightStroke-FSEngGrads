export class Triangle{
     area=(h:number,b:number)=>{
        return 0.5*h*b;
     }

 }
 export class Square{
     private a:number;
     constructor(a:number){
         this.a=a;
     }
     squa_area=()=>{
         return this.a*this.a;
     }

 }
 export class Rectangle{
    private len: number;
    private bre:number;
    private hei:number;
    constructor(len:number,bre:number,hei:number){
        this.len=len;
        this.bre=bre;
        this.hei=hei;
    }
    rect_area=()=>{
        console.log("surface area of a rectangle is "+2*((this.len*this.bre)+(this.bre*this.hei)+(this.hei*this.len)))
    }
}
let rectangle:Rectangle = new Rectangle(3,4,3);
rectangle.rect_area();
let square:Square = new Square(3);
console.log("surface area of the square is "+square.squa_area());
let triangle:Triangle =new Triangle();
console.log("Surface area of the triangle "+triangle.area(2,2));

