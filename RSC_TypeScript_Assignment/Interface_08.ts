interface Payment{
    doPayment:(String)=>String;
    getPaymentStatus:(String)=>String

}
class bank implements Payment{
    refnum:String;
    paymentCredits:String;
    
    doPayment(paymentCredits:String){
        this.paymentCredits=paymentCredits;
        return `The ${this.paymentCredits} is credited to your account`
    }
    getPaymentStatus(refnum:String){
       this.refnum=refnum;
       return `The ${refnum} reference number payment is successfully done`;
    }
}
let e:Payment=new bank();
console.log(e.doPayment("12,00"));
console.log(e.getPaymentStatus("678945434345"))

/*
The 12,00 is credited to your account
The 678945434345 reference number payment is successfully done
*/