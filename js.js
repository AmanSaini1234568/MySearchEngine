button1 =document.querySelector("#button1");
button2 =document.querySelector("#button2");
text =document.querySelector("textarea");
mic =document.getElementById("mic");

window.addEventListener("load",function(){
    date =new Date;
    let time =new SpeechSynthesisUtterance( " My Name Vision 0.1. Now time is" + new Date().getHours()+"Houre"+new Date().getMinutes()+"minutes"+ new Date().getSeconds()+"seconds");
    // wish();
    // speechSynthesis.speak(time);
})

function wish(){
    var time=new Date().getHours();
    if(time>=1 && time<12 ){
        wishme=new SpeechSynthesisUtterance("good morning sir")
        speechSynthesis.speak(wishme);
    }
    else if (time==12){
        wishme=new SpeechSynthesisUtterance("good afternoon sir")
        speechSynthesis.speak(wishme);
    }
    else {
        console.log("good evning sir");
        wishme=new SpeechSynthesisUtterance("good evning sir")
        speechSynthesis.speak(wishme);
    }
}

button1.addEventListener("click",()=>{
    let utterance =new SpeechSynthesisUtterance(text.value);
    speechSynthesis.speak(utterance);
});

button2.addEventListener("click",()=>{
    window.open(`https://www.google.come/search?=${text.value}`);
})

function speakwrite(){
    console.log("yes");
   var SpeechRecognitionResult=new webkitSpeechRecognition ();
    SpeechRecognitionResult.lang="en-GB";
    SpeechRecognitionResult.onresult=function(event){
        console.log(event);  // * no respons
         text.value= event.result[0][0].transcript;
        
    }
    SpeechRecognitionResult.start();
}