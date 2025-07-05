const my=document.getElementById("my-value");


function addPara(){

//create  element
const para=document.createElement("p");
para.innerHTML="i am para using js";


//add element

const parent=document.getElementById("box");
parent.append(para);
}