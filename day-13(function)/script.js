//var--->function scope 
//const,let---->block scope
//global variable can access in function
//local variable can access only within that block scope

/*
let userName="pm modi"//global var

function doSomething(){
    let userName="gayatri"//local var
    console.log(userName);
}
doSomething();


//we cannot have same name variable in the same scope
//we declare function with same name

 if(true){
    const age=18;
    }
    console.log(age);// const block scope{}  so cannot access
*/

/*
    //default parameters
    function addNum(num1=0,num2=0){
        console.log(num1+num2);
    }
    addNum(10);

    function greet(userName="Guest"){
        console.log("good afternoon",userName)
    }
    greet();
    */
/*
    //to print sum of digits in a number

    function printDigit(num){
          let digit=0;
          let sum=0;
        while (num>0){
            digit=num%10
            num=parseInt(num/10);
            sum=sum+digit;
        }
         console.log(sum);
    }
    printDigit(12345); // o/p will be 15.
    */


    //to print the digits in a number
    function printDigit(num){
          let digit=0;
        while (num>0){
            digit=num%10
            console.log(digit);
            num=parseInt(num/10);

        }
    }
    printDigit(123);


    