//check year is leap or not
let year=2024;
if(year%4==0){
    console.log(year+" year is leap");
}else{
    console.log(year+"  is not leap year");
}

//match username and password

let userName="gayatri";
let password="1234";
if(userName=="gayatri" && password=="1234"){
    console.log("login successfully");
}else{
    console.log("access denied");
}

//check the no is between 10 to 50
let no =0;
if(no>10 && no <50){
    console.log("no is in range"+no);
}else{
    console.log("no is out of range"+no);
}

//check larger no between the two numbers
let a=10;
let b=10;
if(a>b){
    console.log(a+" is the larger no");
}else if(b>a){
    console.log(b+" is the larger");
}else{
    console.log("both no's are equal");
}

//student is pass or fail

let m1=40;
let m2=35;
let m3=45;
if(m1>=40 && m2>=40 && m3>=40){
    console.log("student is pass");
}else{
    console.log("student is fail");
}

//print the grade according to the marks
let marks=85;

if(marks>=90 && marks <=100){
    console.log("garde is A");
}else if(marks>=80 && marks <=89){
    console.log("garde is B");
}else if(marks>=70 && marks <=79){
    console.log("garde is C");
}else if(marks>=60 && marks <=69){
    console.log("garde is D");
}else if(marks<60){
    console.log("fail");
}





