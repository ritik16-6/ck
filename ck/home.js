const menuToggle = document.getElementById("check");
const navLinks = document.querySelectorAll(".nav-links a");

/* Close menu when any link is clicked */
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuToggle.checked = false;
    });
});

/* Handle mobile back button */
window.addEventListener("popstate", () => {
    menuToggle.checked = false;
});

