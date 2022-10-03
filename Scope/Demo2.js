let train = { 
    train_Name : "PN Express",
    station_Name : "Bengaluru",
    station : function(){
        console.log("Train Started : "+this.train_Name);
        console.log("Station : "+this.station_Name);
        console.log("Junction : "+this.junction_Name);
    }
   
}

let train2 = {
    train_Name : "JK Express",
    station_Name : "Jammu",
    station : function(){
        console.log("Train started : "+this.train_Name)
        console.log("Another Train started : "+train.train_Name)
    }
}
train.station();
train2.station();

