const txt = document.getElementById('txt');
const btn = document.getElementById('btn');
const para = document.getElementById('para');
const audio = new Audio("song.mp3")

let vid = document.getElementById("myVideo");

btn.addEventListener("click", ()=>{
    let len = txt.value.length;
    if(len == 7){
        para.style.display = "none";
        setTimeout(() => {
            audio.play();
            vid.style.opacity = "0.8";
            vid.style.display = "block";
            vid.play();
        }, 500);
    }else{
        audio.pause();
        vid.style.display = "none";
        para.style.display = "block";
    }
});