/* =====================================
   THE CHRONICLES OF CHUHIYA & ULLU
   JavaScript
===================================== */

// Background Music
const music = document.getElementById("bgMusic");
const startBtn = document.getElementById("startBtn");

if(startBtn){
    startBtn.addEventListener("click", () => {

        music.volume = 0.35;

        music.play();

        document.getElementById("chapter1").scrollIntoView({
            behavior: "smooth"
        });

    });
}


// Fade Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

},{
threshold:.15
});


document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition="all 1.2s ease";

observer.observe(section);

});


// Mouse movement effect

document.addEventListener("mousemove",(e)=>{

const fireflies=document.querySelector(".fireflies");

if(fireflies){

fireflies.style.transform=
`translate(${e.clientX*0.01}px,${e.clientY*0.01}px)`;

}

});


// Lantern Glow

const lantern=document.querySelector(".lantern");

if(lantern){

setInterval(()=>{

lantern.classList.toggle("bright");

},2500);

}


// Story Quotes Animation

const quotes=document.querySelectorAll(".fade");

const quoteObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{
opacity:0,
transform:"translateY(40px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],{

duration:1200,

fill:"forwards"

});

}

});

});

quotes.forEach(q=>quoteObserver.observe(q));


// Ending Confetti

const ending=document.getElementById("ending");

const endObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

createFireflies();

}

});

});

if(ending){

endObserver.observe(ending);

}

function createFireflies(){

for(let i=0;i<25;i++){

let star=document.createElement("div");

star.style.position="fixed";

star.style.width="6px";

star.style.height="6px";

star.style.borderRadius="50%";

star.style.background="#ffe066";

star.style.left=Math.random()*100+"vw";

star.style.top="100vh";

star.style.boxShadow="0 0 15px #ffe066";

star.style.zIndex="999";

star.style.transition="all 6s linear";

document.body.appendChild(star);

setTimeout(()=>{

star.style.top="-20vh";

star.style.opacity="0";

},100);

setTimeout(()=>{

star.remove();

},7000);

}

}


// Hidden Ending

let clicked=0;

document.body.addEventListener("click",()=>{

clicked++;

if(clicked===20){

alert("🌿 One Last Page\n\nDear Ullu...\n\nThank you for sitting at that Tea Post table two years ago.\n\nIf that misunderstanding had never happened...\nperhaps this story would've never been written.\n\nHappy 730 Days ❤️\n\n— Chuhiya");

}

});