var bank1 = {
    customer_Name : "Tim",
    bank_Name : "IOS Bank",
    branch_Names : ["MG Road", "Jayanagar", "BTM Layout", "Hebbal"],
    pincode : {1:560001, 2:560068, 3:560069, 4:560064},
    details:function(){
        return "My bank detaiks are :"+this.customer_Name+"    "+this.bank_Name+"    "+this.branch_Names[2]+"     "+this.pincode[3]
    }
}
var bank2 = {}
bank2.__proto__ = bank1
bank2.customer_Name = "David"
bank2.bank_Name = "Canara Bank"    // overriding
bank2.branch_Names = ["SB", "JK", "MJ", "KRP"]   // Overriding
console.log(bank1.details());
console.log(bank2.details());