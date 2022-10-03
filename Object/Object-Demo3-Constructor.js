function data(Greeting, Days, Hours,Week){
    this.Greeting = Greeting
    this.Days = Days
    this.Hours = Hours
    this.week = function(){ return "1st week"}
}
var data1 = new data("Hello",{Day1:"Sunday", Day2:"Monday", Day3:"Tuesday"},[24,36,48,72])

console.log(data1);
//console.log(data1.Greeting);
//console.log(data1.Days.Day1);
//console.log(data1.Hours);
//console.log(data1.Hours[2]);
//console.log(data1.week());