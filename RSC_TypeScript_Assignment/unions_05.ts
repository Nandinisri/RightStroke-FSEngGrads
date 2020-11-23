export class Unions{

    display=(code: (string | number))=>
{
    if(typeof(code) === "number")
        console.log('Code is number.')
    else if(typeof(code) === "string")
        console.log('Code is string.')
}

}
let u:Unions = new Union()
u.display(123); 
u.display("ABC"); 
