var student = {name:"Lalon", mobile: 12345, address:"Gunotia"};

//show specific property of object in 3 way

var mobile1 = student.mobile;
var mobile2 = student["mobile"];
var mobileProName = "mobile";
var mobile3 = student[mobileProName];

//Add new property to object in 3 way

student.job = "Executive";
student["company"] = "Knit Asia";

console.log(student);

console.log(mobile1);
console.log(mobile2);
console.log(mobile3);