const roles = [
    "Game Developer",
    "Unity Developer",
    "Unreal Engine Developer",
    "Gameplay Programmer"
];

const roleElement = document.getElementById("changing-role");

let roleIndex = 0;

function changeRole() {
    // Fade out the current role
    roleElement.classList.add("fade-out");

    setTimeout(() => {
        // Select the next role
        roleIndex = (roleIndex + 1) % roles.length;

        // Change the displayed text
        roleElement.textContent = roles[roleIndex];

        // Fade the new role in
        roleElement.classList.remove("fade-out");
    }, 500);
}

// Change the role every 3 seconds
setInterval(changeRole, 3000);

// =================================
// GAME SHOWCASE SLIDER
// =================================

const projects = [
    {
        title: "Final Bell",
        engine: "Unreal Engine 5",
        image: "assets/images/final-bell/final-bell-cover.png"
    },
    {
        title: "Space Dodger",
        engine: "Unity",
        image: "assets/images/space-dodger/space-dodger-cover.png"
    }
];

const showcaseImage = document.getElementById("showcase-image");
const showcaseTitle = document.getElementById("showcase-title");
const showcaseEngine = document.getElementById("showcase-engine");
const showcaseNumber = document.getElementById("showcase-number");

const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index) {

    showcaseImage.classList.add("fade");

    setTimeout(() => {

        currentSlide = index;

        showcaseImage.src = projects[currentSlide].image;
        showcaseImage.alt = projects[currentSlide].title + " game cover";

        showcaseTitle.textContent = projects[currentSlide].title;
        showcaseEngine.textContent = projects[currentSlide].engine;

        showcaseNumber.textContent =
            `${currentSlide + 1} / ${projects.length}`;

        dots.forEach(dot => {
            dot.classList.remove("active");
        });

        dots[currentSlide].classList.add("active");

        showcaseImage.classList.remove("fade");

    }, 400);
}


// Clickable dots

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {
        showSlide(index);
    });

});


// Automatically change every 5 seconds

setInterval(() => {

    const nextSlide =
        (currentSlide + 1) % projects.length;

    showSlide(nextSlide);

}, 5000);

// =================================
// MOBILE NAVIGATION
// =================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const menuIcon = menuToggle.querySelector("i");

        if (navLinks.classList.contains("active")) {
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-xmark");
        } else {
            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");
        }

    });


    // Close menu after clicking a navigation link

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            const menuIcon = menuToggle.querySelector("i");

            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");

        });

    });

}