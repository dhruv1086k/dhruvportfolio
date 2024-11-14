const navLinks = document.querySelectorAll(".headerCenter a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        setTimeout(() => {
            document.querySelector(".headerCenter").classList.remove("active");
        }, 500);
    });
});
const hamburger = document.querySelector(".hamburgerMenu");
hamburger.onclick = function() {
    document.querySelector(".headerCenter").classList.toggle("active");
};

const themeBtn = document.querySelector(".themeBtn");
function toggleTheme() {
    themeBtn.classList.toggle("fa-moon");
    themeBtn.classList.toggle("fa-sun");
    document.body.classList.toggle("dark-theme");
}
themeBtn.addEventListener("click", toggleTheme);

var typed = new Typed(".auto-type", {
    strings: ["Frontend Web Developer", "UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.top = "-200%";
});
