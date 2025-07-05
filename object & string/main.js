//object-->no -primitive data type to store key value pairs
//1.update  2.delete  3.access  4.to add new key value pair
/*
let address={
    city:"pune",
    state:"maharastra",
    pincode:"413725"
}

//access

console.log(address.city);
//bracket notation-->optional
//console.log(address["city"]);

//update
address.city="nashik";

//add new key value pair
address.houseno=123;

//delete
delete address.state;

//object within object

let person={
    name:"gayatri",
    address:{
    city:"pune",
    state:"maharastra",
    pincode:"413725"
}
}
console.log(person.address.pincode);
*/

//String---->collection of characters--->``(back ticks),'',""

/*
//to convert into uppercase
let userName="gaytari";
const uppercase=userName.toUpperCase();
console.log(uppercase);

//to convert into 

let userName1="GAYATRI";
const uppercase1=userName.toLowerCase();
console.log(uppercase1);

*/
/*
let userName="gaytari";
console.log(userName.length);
console.log(userName[0]);
console.log(userName[1]);
console.log(userName[2]);
console.log(userName);

let sentence="I Love India"








//reverse a string
//1.first way
let String1="itshaala"
let reverse="";
for(i=String1.length-1;i>=0;i--){
    reverse=reverse+String1[i];
}
console.log(reverse);

//2.second way
let String1="itshaala"
let reverse="";
for(i=0;i<String1.length;i++){
    reverse=String1[i]+reverse;
}
console.log(reverse);

//1.split()-->break string then convert it into array
//2.reverse()---->reverse array
//3.join()---->join the string

//3.third way
let String1="gayatri"
let reverse=String1.split("").reverse().join("");
console.log(reverse);
*/
/*
//fibonacciserirs
let t1=0;
let t2=1;
 console.log(t1);
  console.log(t2);


for(let i=0;i<7;i++){
    next=t1+t2;
    t1=t2;
    t2=next;
    console.log(next);
}
    */

//armstrong no

function armstrong(num){
    let sum=0;
    let orgno=num;
while(num>0){
    let re=num%10;
    sum=sum+re*re*re;
    num=+num/10;
}
if(orgno==num){
    console.log("no is armstrong "+orgno);
}else{
    console.log("no is  not armstrong "+orgno);
}
}
armstrong(153); 