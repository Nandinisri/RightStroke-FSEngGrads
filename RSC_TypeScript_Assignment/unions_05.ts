export class Union{

    displayType=(code: (string | number))=>
{
    if(typeof(code) === "number")
        console.log('Code is number.')
    else if(typeof(code) === "string")
        console.log('Code is string.')
}

}
let u:Union = new Union()
u.displayType(123); // Output: Code is number.
u.displayType("ABC"); // Output: Code is string.