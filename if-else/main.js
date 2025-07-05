
//1.if statement
let age=55;
if(age>=18) {
    console.log("you can  vote");
}

//if-else
let num=12;
if(num>0) {
    console.log("no is positive");
}else {
    console.log("number is negative");
}

//2.nested if else-->(if else if)
//example-1
let num1=0;
if(num1>0) {
    console.log("no is positive");
}else if(num1==0){
    console.log("no is zero");

}else {
    console.log("number is negative");
}
//example-2
let per=85
if(per>90){
    console.log("excellent");
}else if(per>80){
        console.log("very good");
}else  {
console.log("good");
}

//example-3
 let lang="marathi";
if(lang=="marathi"){
        console.log("jay maharastra");
}else if(lang=="hindi"){
        console.log("namaste");
}else if(lang=="english"){
        console.log("hello");
}else{
        console.log("invalid language");
}
//example-4
 let number1 =3;
if(number1 %2 ==0) {
    console.log("no is even");
}else {
    console.log("number is odd");
}







let no=10;


if(no%3==0 && no%5==0 ){
    console.log("fizzbuzz");
}else if(no%3==0){
        console.log("fizz");
}else if (no%5==0){
        console.log("buzz");
}else{
    console.log(" given number is not divisible by 3 & 5");
}