
//sort an array
//find second largest no in array
//find second smallest no in array

/*
//to find largest number from an array

const arr=[1,100,34,20,5,7];
let largeno=arr[0];
for(let i=1; i<arr.length;i++){
   let nextnum=arr[i];

   if(largeno<nextnum)
   {
    largeno=nextnum;
   }
}
console.log(largeno);


// find smallest no in array
const arr1=[1,100,34,20,5,7];
let smallno=arr1[0];
for(let i=1; i<arr1.length;i++){
   let nextnum1=arr1[i];

   if(smallno>nextnum1)
   {
    smallno=nextnum1;
   }
}
console.log(smallno);
*/


/*
//compare given stud to an arrray
const stud=["ram","gayatri","vaishnavi","nisha","rutuja"];

let givenstud="gayatri";
let flag =false;

for(let i=0;i<stud.length;i++){

    if(stud[i]===givenstud){

     flag =true;
    }
}

if( flag === true){
    console.log(" given student is present");
}else{
    console.log(" given student is not  present");
}
    */


/*
// find factorial of a number
// 1*2*3*4*5

let num=5;
let  factorial = 1;

for(i=1;i<=num;i++){
      factorial *= i;
}
console.log(factorial);
*/


/*
//find the prime number

let num=25;
let flag=true;

for(let i=2;i<num/2;i++){
if(num % i==0){
flag=false;
}
}

if(flag===true){
    console.log("num is prime "+num);
}else{
    console.log("num is not prime "+num);
}
    */




//print all prime no from 1-100

/*

for(let num=2; num<=100 ;num++){
    let flag=0; 

for(let i=2;i<=num/2;i++){

if (num % i==0 ) {
flag=1;
}
}
if(flag==0){
    console.log(" prime no is  "+num);
}
}
*/



/*
//count all the prime no from no 1-100
let count=0;
for(let num=2; num<=100 ;num++){
let flag=0; 

for(let i=2;i<=num/2;i++){

if (num % i==0 ) {
flag=1;
}
}
if(flag==0){
    count=count+1;
}
}
console.log(count);

*/


/*
// find  second largest no in array

let arr = [1, 100, 34, 20, 5, 7];
let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {               // 1>largest
    secondLargest = largest;           
    largest = arr[i];
  } else if (arr[i] > secondLargest && arr[i] < largest) {
    secondLargest = arr[i];
  }
}

console.log("Second largest number:", secondLargest);

*/



/*
Initialization:

arr = [1, 100, 34, 20, 5, 7]

largest = -Infinity

secondLargest = -Infinity

Iteration 1 (i = 0):

Current number: arr[0] = 1

1 > -Infinity: Update largest to 1.

secondLargest remains -Infinity.

Iteration 2 (i = 1):

Current number: arr[1] = 100

100 > 1: Update secondLargest to 1, then update largest to 100.

secondLargest = 1

Iteration 3 (i = 2):

Current number: arr[2] = 34

34 > 1 and 34 < 100: Update secondLargest to 34.

secondLargest = 34

Iteration 4 (i = 3):

Current number: arr[3] = 20

20 > 34: No update.

secondLargest = 34

Iteration 5 (i = 4):

Current number: arr[4] = 5

5 > 34: No update.

secondLargest = 34

Iteration 6 (i = 5):

Current number: arr[5] = 7

7 > 34: No update.

secondLargest = 34

*/

/*
//find second smallest number from an array
let arr = [1, 100, 34, 20, 5, 7];
let smallest = Infinity;
let secondSmallest = Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < smallest) {
    secondSmallest = smallest;
    smallest = arr[i];
  } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
    secondSmallest = arr[i];
  }
}

console.log("Second smallest number:", secondSmallest);

*/
