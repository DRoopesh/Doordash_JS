var college = new Object()
college.name = "RGIT"
college.streams = ["ECE", "EEE", "MECH"]
college.Percentage={Distinction:75, Avergae:65, Fail:30}
college.qualify=function(){
    return "Certified"
}
console.log(college.Percentage.Distinction)