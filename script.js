function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}
window.addEventListener("scroll", function () {

const winScroll = document.documentElement.scrollTop;

const height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const scrolled = (winScroll / height) * 100;

document.getElementById("progress-bar").style.width =
scrolled + "%";

}// ===== Mobile Menu =====
function toggleMenu() {
    document.getElementById("navbar").classList.toggle("active");
}

// ===== Dark / Light Mode =====
const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {

    darkModeBtn.addEventListener("click", function(e) {

        e.preventDefault();

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){
            darkModeBtn.innerHTML = "☀️ Light Mode";
        }else{
            darkModeBtn.innerHTML = "🌙 Dark Mode";
        }

    });

}
