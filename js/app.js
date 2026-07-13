// app.js
// Global Website Functionality

document.addEventListener("DOMContentLoaded", () => {

    initializeNavbar();

    initializeScrollProgress();

    initializeBackToTop();

});

// ACTIVE NAVIGATION

function initializeNavbar() {

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.addEventListener("click", () => {

        const links = document.querySelectorAll(".nav-links a");

        links.forEach(link => {

            const href = link.getAttribute("href");

            if (href === currentPage) {

                link.classList.add("active");

            }

        });

    });

}

// SCROLL PROGRESS BAR


function initializeScrollProgress() {

    const progressBar = document.getElementById("progress-bar");

    if (!progressBar) return;

    window.addEventListener("scroll", () => {

        const scrollTop = document.documentElement.scrollTop;

        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress = (scrollTop / scrollHeight) * 100;

        progressBar.style.width = progress + "%";

    });

}

// BACK TO TOP BUTTON

function initializeBackToTop() {

    const button = document.createElement("button");

    button.id = "backToTop";

    button.innerHTML = "↑";

    document.body.appendChild(button);

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            button.classList.add("show");

        }

        else {

            button.classList.remove("show");

        }

    });

}