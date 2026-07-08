/* ==========================================
   THE CHRONICLES OF CHUHIYA & ULLU
   JavaScript V2
========================================== */

// ---------- Elements ----------

const music = document.getElementById("bgMusic");
const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const storm = document.querySelector(".storm");
const lantern = document.querySelector(".lantern");


// ---------- Intro ----------

window.addEventListener("load", () => {

    if(intro){

        setTimeout(()=>{

            intro.style.opacity="0";

            setTimeout(()=>{

                intro.style.display="none";

            },2000);

        },8500);

    }

});


// ---------- Start Button ----------

if(startBtn){

startBtn.addEventListener("click", async ()=>{

    if(music){

        music.volume=0.35;

        try{

            await music.play();

        }

        catch(err){

            console.log(err);

        }

    }

    const chapter=document.getElementById("chapter1");

    if(chapter){

        chapter.scrollIntoView({

            behavior:"smooth"

        });

    }

});

}


// ---------- Fade Sections ----------

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

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


// ---------- Mouse Parallax ----------

document.addEventListener("mousemove",e=>{

const fireflies=document.querySelector(".fireflies");

if(fireflies){

fireflies.style.transform=

`translate(${e.clientX*0.01}px,${e.clientY*0.01}px)`;

}

});


// ---------- Lantern ----------

if(lantern){

setInterval(()=>{

lantern.classList.toggle("bright");

},2500);

}


// ---------- Quote Animation ----------

const quotes=document.querySelectorAll(".fade");

const quoteObserver=new IntersectionObserver(entries=>{

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


// ---------- Ending Fireflies ----------

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

const ending=document.getElementById("ending");

if(ending){

const endObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

createFireflies();

}

});

});

endObserver.observe(ending);

}
// ==========================================
// STORMS V2
// ==========================================

function lightning(){

    if(!storm) return;

    storm.animate([

        {
            filter:"brightness(1)"
        },

        {
            filter:"brightness(2.4)"
        },

        {
            filter:"brightness(1)"
        }

    ],{

        duration:220

    });

}

setInterval(()=>{

    if(Math.random()>0.45){

        lightning();

    }

},5000);


// ---------- Sunlight After Storm ----------

const highlight=document.querySelector(".highlight");

if(highlight && storm){

const sunObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

storm.style.transition="3s";

storm.style.background=

"linear-gradient(180deg,#334b61,#496e67,#7aa85c)";

}

});

},{threshold:.8});

sunObserver.observe(highlight);

}


// ---------- Floating Magic Fireflies ----------

function createMagicFireflies(){

for(let i=0;i<30;i++){

let firefly=document.createElement("div");

firefly.className="magic-firefly";

firefly.style.left=Math.random()*100+"vw";

firefly.style.top=(70+Math.random()*30)+"vh";

firefly.style.animationDelay=Math.random()*5+"s";

document.body.appendChild(firefly);

}

}

createMagicFireflies();


// ---------- Floating Leaves ----------

function createLeaf(){

let leaf=document.createElement("div");

leaf.className="leaf";

leaf.innerHTML="🍃";

leaf.style.left=Math.random()*100+"vw";

leaf.style.animationDuration=(6+Math.random()*6)+"s";

document.body.appendChild(leaf);

setTimeout(()=>{

leaf.remove();

},12000);

}

setInterval(createLeaf,900);


// ---------- Hidden Ending ----------

let clicked=0;

document.body.addEventListener("click",()=>{

clicked++;

if(clicked===20){

alert(
`🌿 One Last Page

Dear Ullu...

Thank you for sitting at that Tea Post table two years ago.

If that misunderstanding had never happened...

perhaps this story would've never been written.

Happy 730 Days ❤️

— Chuhiya`
);

}

});
