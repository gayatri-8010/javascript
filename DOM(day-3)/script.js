let count=0;
const cou=document.getElementById("cou");

function displayCount(){
    
    count++;
    cou.innerHTML=count;
}

function displayCount1(){
    if(count ==0){
        return
    }
    count--;
    cou.innerHTML=count;
}