//functio is a block of code written to perform some specific task and return a value to user
//1.camelcase
//2.meaningful name of function
//3.verb--do something
/*
// function declaration

function greet(){
    console.log("good afternoon all!!!");
}

greet();    //calling


//function argument
//           parameter/
function greet1(user){
    console.log("good afternoon "+user);
}
//     argument/input
greet1("gayatri");


//two argument of functions

function addNumbers(a,b){
    let sum=a+b;
    console.log("sum is"+sum);
}

addNumbers(20,10);
*/


/*
//write a function name check even or odd which will take a number and print even or add

function  checkEvenOdd(num){
    if(num%2==0){
        console.log("num is even "+num);
    }else{
         console.log("num is odd "+num);
    }
}

checkEvenOdd(3);
*/

/*
//1.ask to enter no from user use prompt
function  checkEvenOdd(num){
    if(num%2==0){
        console.log("num is even "+num);
    }else{
         console.log("num is odd "+num);
    }
}
 let  num=+prompt("enter number");
checkEvenOdd(num);
*/

/*
//write a function which will take two numbers and print which no is largest

function largeNum(a,b){
    if(a>b){
       console.log("num a is largeset "+a);
    }else{
       console.log("num b is largest "+b);
    }
}
largeNum(10);//a=>11   b=>undefined

*/

/*
//function return a value 
function increaseByOne(num){
    let newNum=num+1;
    return newNum;
}

const num=increaseByOne(100)

console.log(num);

*/


/*
//after return  line does not execute any line
function increaseByOne(num){
    let newNum=num+1;
    return newNum;//end of function
    console.log("hii");
}

const num=increaseByOne(100)

console.log(num);

*/

//for function-->
//primitive-->copy me change hoga-->
//reference  type (object datatype)--->change fuction me hoga


/*
//this is for primitive data types

let num=10;

let num1=num;

num1++;

console.log(num);
*/

/*
//for non primitive datatypes i.e. object
let person={
    name:"gayatri",
    age:18
    
}

console.log(person);
*/

/*
//2.write fun that takes two no and retuen sum

function addNumbers(a,b){
    return a+b; 
}

console.log(addNumbers(20,10));
*/


/*
//3.return largest no from 3  numbers
//you can also use math.max built in function

function largeNum(a,b,c){
    if(a>b && a>c){
       return a;
    }else if(b>c && b>a){
        return  b;
      }else{
      return c;
      }
}
console.log(largeNum(1,3,2));

//using math.max
function mathmax(num1,num2,num3){
    const maxnum = Math.max(num1,num2,num3);
    return maxnum;
}

console.log(mathmax(10,30,20));
*/
/*
function Table(num){
    for(i=1;i<=10;i++){
        console.log(num*i);
    }
}
  Table(5);
*/
/*
//repeat the string

function repeatStr(user,num){
    let str="";
    for(i=0;i<num;i++){
        str=str+user;

    }
    return str;
}

 str1=repeatStr("gayatri",3);
 console.log(str1);
*/

/*
//4.find factorial

function fact(num){
let  factorial = 1;

for( let i=1;i<=num;i++){
      factorial = factorial*i;
}
return factorial;
}
console.log(fact(5));
 
*/


//5.sum of digit using function and also count no of digits in number

function sumOfDigits(num) {
  let digit = 0;
  let sum=0;
   //let count=0;

  while (num > 0) {
    let digit = num % 10;        
    num = parseInt(num  / 10);
    sum=sum+digit;
      //count++;
    
  }
 
    return sum;
  //return count;
}

console.log(sumOfDigits(12980));  
 
