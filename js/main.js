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