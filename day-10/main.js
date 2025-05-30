//1 .alert--->to display message to user
//2.confirm--->to ask yes no type question return true or false value
//3.prompt--->display input box to user --return string /null


/*
alert("hi there");

let canDrive=confirm("can  you drive a bike")
if(canDrive==true){
    alert("you  are allowed to get liscence");
}else{
   alert("you are not eligible to get liscence");
}
   */



//let age=prompt("enter your age???");
//if(age>=18){
    //alert("you can vote");
//}else{
    //alert("you can not vote");
//}



//type casting using three ways
//1.Number
//2.parseInt
//3.use only + sign

/*
let num1=prompt("enter 1 no");

let num2=prompt("enter 2 no");

alert(Number(num1)+Number(num2));

*/




/*
let num1=Number(prompt("enter 1 no"));

let num2=Number(prompt("enter 2 no"));

alert(num1+num2);
*/


/*convert minutes in seconds
let min=Number(prompt("enter minute"));
let sec=min*60;
alert(sec);
*/

/*
find area of triangle
let base=Number(prompt("enter base"));

let height=Number(prompt("enter height"));

let area = (1/2)*base*height;

alert("area of triangle "+ area);
*/

/*


//find sumof two no's and check is<=100

let no1=Number(prompt("enter 1 no"));

let no2=Number(prompt("enter 2 no"));

let sum=(no1+no2);

if(sum<=100){
    alert("numbers are to small "+sum);
}else{
    alert("numbers are large "+sum);
}
    */


// even or odd


/*
   let no1=Number(prompt("enter  no"));

   if(no1%2==0){
    alert("number is even "+no1);
}else{
    alert("number is odd "+no1);
}
    */

//basic simple calculator
/*
let no1=Number(prompt("enter 1 no"));

let no2=Number(prompt("enter 2 no"));

 let operator=prompt("enter operator");
 

 switch(operator){
    case '+':
        let sum=no1+no2;
      alert("sum is "+sum);
        break;
    case '-':
        let sub=no1-no2;
      alert("sub is "+sub);

        break;
    case '*':
        let mul =no1*no2;
    alert("mul is "+mul);
        break;
    case '/':
        let div =no1/no2;
        alert("div is "+div);

        break;
    default:
            alert(" invalid input ");


 }
*/

let no1=Number(prompt("enter 1 no"));

let no2=Number(prompt("enter 2 no"));

 let choice=+prompt("enter your choice");
 

 switch(choice){
    case '+':
        let sum=no1+no2;
      alert("sum is "+sum);
        break;
    case '-':
        let sub=no1-no2;
      alert("sub is "+sub);

        break;
    case '*':
        let mul =no1*no2;
    alert("mul is "+mul);
        break;
    case '/':
        let div =no1/no2;
        alert("div is "+div);

        break;
     default:
            alert(" invalid input ");


 }