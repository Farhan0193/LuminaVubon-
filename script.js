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

}const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keypress", function (e) {

 if (e.key === "Enter") {

    e.preventDefault();

    const keyword = this.value.toLowerCase().trim();

            const keyword = this.value.toLowerCase().trim();

            if (keyword === "technology") {
                window.location.href = "technology.html";
            }
            else if (keyword === "ai") {
                window.location.href = "ai-tools.html";
            }
            else if (keyword === "freelancing") {
                window.location.href = "freelancing.html";
            }
            else if (keyword === "health") {
                window.location.href = "health.html";
            }
            else if (keyword === "beauty") {
                window.location.href = "beauty.html";
            }
            else if (keyword === "fitness") {
                window.location.href = "fitness.html";
            }
            else{
                alert("No article found.");
            }

        }

    });
}
