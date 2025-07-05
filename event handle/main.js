
/*
function doSomething(){
    console.log("button is clicked");
}

const button=document.getElementById("btn");

//2nd way of event handlings

button.onclick=doSomething;  //reference pass-->does not called function only write the name of function
*/

const div=document.getElementById("box");
function handelMouseMove(eventobj){
    div.style.top=eventobj.clientY + "px";
    div.style.left=eventobj.clientX + "px";
}

//document.onmousemove=handeleMouseMove;

document.addEventListener("mousemove",handelMouseMove);