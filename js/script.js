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