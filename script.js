// ===== Mobile Menu =====
function toggleMenu() {
    const navbar = document.getElementById("navbar");
    if (navbar) {
        navbar.classList.toggle("active");
    }
}

// ===== Progress Bar =====
window.addEventListener("scroll", function () {
    const winScroll = document.documentElement.scrollTop;
    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    const progressBar = document.getElementById("progress-bar");
    if (progressBar) {
        progressBar.style.width = scrolled + "%";
    }
});

// ===== Dark / Light Mode =====
const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {
    darkModeBtn.addEventListener("click", function (e) {
        e.preventDefault();

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            darkModeBtn.textContent = "☀️ Light Mode";
        } else {
            darkModeBtn.textContent = "🌙 Dark Mode";
        }
    });
}

// ===== Search =====
const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keydown", function(e) {

        if (e.key === "Enter") {

            e.preventDefault();
            e.stopPropagation();

            const keyword = this.value.trim().toLowerCase();

            if (!keyword) return;

            const pages = {
                "technology":"technology.html",
                "ai":"ai-tools.html",
                "ai tools":"ai-tools.html",
                "freelancing":"freelancing.html",
                "health":"health.html",
                "beauty":"beauty.html",
                "fitness":"fitness.html"
            };

            if (pages[keyword]) {
                window.location.href = pages[keyword];
            } else {
                alert("No article found.");
            }
        }
    });
}

// ===== Scroll To Top Button =====
const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "12px 16px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#0d6efd";
topBtn.style.color = "#fff";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "9999";

window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
