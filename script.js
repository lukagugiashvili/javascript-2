let firstname = "luka"
let age = "20"
let address = "varketili"

let myname = `my name is ${firstname},`
let myage = "my age is" +" "+ age + ","
let myaddress = `my address is ${address}`
console.log(myname, myage, myaddress);

if (age < 19) {
    console.log("i am teenager")
}
else {
    console.log (" i am adult")
}

for (let i = 1; i <= 10; i+=2) {
    console.log(i);  // printing the value of i
}