var bank1 = {
    customer_Name : "Jim",
    bank_Name : "ICICI Bank",
    branch_Names : ["MG Road", "Jayanagar", "BTM Layout", "Hebbal"],
    pincode : {MG_Road:560001, Jayanagar:560068, BTM:560069, Hebbal:560064},
    details:function(){
        return "My bank detaiks are :"+this.customer_Name+"    "+this.bank_Name+"    "+this.branch_Names[2]+"     "+this.pincode.Hebbal
    }
}
// console.log(bank1.details());
var bank2 = Object.create(bank1)
bank2.customer_Name = "Carry"
bank2.bank_Name = "YES Bank"    // overriding
bank2.branch_Names = ["Silkboard", "Jakkur", "Majestic", "KRPuram"]   // Overriding
console.log(bank1.details());
console.log(bank2.details());