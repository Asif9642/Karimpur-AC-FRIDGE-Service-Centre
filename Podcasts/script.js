document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skill");
    const menu = document.getElementById("nav-menu");
    const menuIcon = document.querySelector(".menu-icon");

    // Floating Animation for Skill Tags
    skills.forEach((skill, index) => {
        let direction = index % 2 === 0 ? 1 : -1;
        setInterval(() => {
            skill.style.transform = `translateY(${direction * 5}px)`;
            direction *= -1;
        }, 1000);
    });

    // Toggle Navigation Menu
    menuIcon.addEventListener("click", () => {
        menu.classList.toggle("visible");
    });
});
// Show "Back to Top" Button on Scroll
window.onscroll = function() {
    let backToTop = document.getElementById("backToTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};

// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Sticky Navbar
window.addEventListener("scroll", function() {
    let navbar = document.querySelector("header");
    navbar.classList.toggle("sticky", window.scrollY > 0);
});