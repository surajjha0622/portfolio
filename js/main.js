// =========================
// ACTIVE NAVBAR
// =========================

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    if(link.href === window.location.href){

        link.classList.add("active");

    }

});

// =========================
// SMOOTH BUTTON ANIMATION
// =========================

document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-4px) scale(1.03)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0)";

    });

});

// =========================
// SCROLL PROGRESS
// =========================

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progress=(scrollTop/height)*100;

document.getElementById("progress-bar").style.width=progress+"%";

});