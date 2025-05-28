//dot notation




/*
//how array and object are different-->
//array and object---Array.isArray()

//            0        1       2         3
let cities=["pune","nashik","satara","sangali"];
console.log("array before "+cities);

*/


//console.log(typeof cities);//type if array always a object
/*
console.log(cities[0]);
console.log(cities[1]);
console.log(cities[3]);
console.log(cities[2]);
console.log(cities[5]);
console.log(cities[-1]);

//TO calculate the length

console.log(cities.length);

// to add an array element in already crated array
cities[4]="kolhapur";
cities[5]="newasa";

cities[2]="nagpur";
*/

//to add an array element using push
//cities.push("delhi");

/*to remove lastly added elements
cities.pop();
*/


/*remove the first element from an array
cities.shift();
*/

/*add the first element from an array
cities.unshift("newasa");
*/
/*
//todelete elements from middle

let cities=["pune","nashik","satara","sangali"];
console.log("array before "+cities);

console.log(cities.splice(2,1));

console.log("array after deletion "+cities);
*/

/*
//splice(index,count hoe many elements to delete,elements which is to be added)---> Syntax

let cities=["pune","nashik","satara","sangali"];
console.log("array before "+cities);

console.log(cities.splice(2,0,"mumbai"));

console.log("array after "+cities);
*/

/*
//print sum like 1+2+3+4..=10
let num=Number(prompt("enter 1 no"));
let sum=0;
for( let i=1;i<=num;i++){
    sum=sum+i;
}
 alert("sum"+sum);
  

*/





/*
//logic building
//print the array elements one by one

let states=["maharastra","goa","up","mp","gujrat"];

for (let i = 0; i < states.length; i++) {

  console.log(states[i]);

}
  */



//print the sum of marks and find average marks

let marks=[95,65,39,41,83,89];
let sum=0;
let avg;
for (let i = 0; i < marks.length; i++) {

  console.log(marks[i]);
  sum=sum+marks[i];
  avg=sum/(marks.length);
}
console.log("sum "+sum);
console.log("avg "+avg);
 
