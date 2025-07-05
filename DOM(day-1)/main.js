/*//dom--->document object model--->change--made in(content,styling,tags)
//dom is tree like structure of content of web pages

//document==>is a object



//STEP-1 
 
// how to  select elements

//1.using id -use 95%

const id=document.getElementById("my-h1");//element

console.log("id");




//2.using class selector

const class1=document.getElementsByClassName("para");//htmlcollections---array like(elements)

//3.tag

const tag=document.getElementsByTagName("p");//htmlcollections---array like(elements)




//4.query selector-->
// all selectos use(id,class,tag)//check from top and top values shos only//(element)

//const query1=document.querySelector(".para");-->class

//const query1=document.querySelector("#my-h1");-->id

const query1=document.querySelector("h1");//-->tag



//5.query selectorall==>//nodelist--also like array

//const query2=document.querySelectorAll(".para")//--class

//const query2=document.querySelectorAll("#my-h1")//-->id

//const query2=document.querySelectorAll("p")//-->tag
    
*/

    //STEP-2
    //dom manipulation
    const selectedH1=document.getElementById("my-h1");

    //content

    //1.innerHTML-->works html tags

    //console.log(selectedH1.innerHTML);

    //2.textcontent-->works on text

    //console.log(selectedH1.textContent);

    //3.innerText--->works on text

     //console.log(selectedH1.innerText);

     
    
     function contentChange(){
        const pro=prompt("enter your message");
        selectedH1.innerHTML=pro;
         }
        