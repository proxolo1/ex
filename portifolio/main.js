let dev=document.getElementById('developer');
let str="nice to meet you";
let i=0;
setInterval(()=>{
    
    if(i<str.length){

        dev.innerHTML+=str[i++];
    }
    else{
        dev.innerHTML="";
        i=0;
    }
    
},100)