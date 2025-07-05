//0,-0,undefined,null,""------>empty string,NaN,false,bigint zero-->0n   
// ------>this values are falsy values except this others are truthy



if(null){
    console.log("given value is truthy");
}
else{
    console.log("given value is falsy");
}

if(" "){
    console.log("given value is truthy");
}
else{
    console.log("given value is falsy");
}

if(0){
    console.log("given value is truthy");
}
else{
    console.log("given value is falsy");
}


if(10){
    console.log("given value is truthy");
}
else{
    console.log("given value is falsy");
}

if("false"){
    console.log("given value is truthy");
}
else{
    console.log("given value is falsy");
}

if("true"){
    console.log("given value is truthy");
}
else{
    console.log("given value is falsy");
}

// if else if example same as switch expression

let day=2;

if(day==1){
    console.log("monday");
}else if(day==2){
    console.log("tuesday");
}else if(day==3){
    console.log("wednesday");
}else if(day==4){
    console.log("thursday");
}else if(day==5){
    console.log("friday");
}else if(day==6){
    console.log("saturday");
}else if(day==7){
    console.log("sunday");
}else {
    console.log("invalid input");
}

//switch  case used internally ===(uses strict equality)it checks content as well as datatypes 
switch(day)
{
    case 1:
        console.log("monaday");
        break;
    case 2:
        console.log("tuesday");
        break;   
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("invalid input");
}