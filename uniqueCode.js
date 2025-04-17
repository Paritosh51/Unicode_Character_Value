const input=document.querySelector("input");
const button=document.querySelector("button");
const p=document.querySelector("p");
button.addEventListener("click",function(){
    if(input){
        const unicodeValue=input.value.charCodeAt(0);
        p.textContent=`The Unicode value of "${input.value}" is ${unicodeValue}`;
    }else{
        p.textContent='Please Enter a Character';
    }
});