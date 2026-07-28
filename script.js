// ==========================
// Mobile Menu
// ==========================

function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}

// ==========================
// Dark / Light Mode
// ==========================

const darkBtn = document.getElementById("darkModeBtn");

if (darkBtn) {

    darkBtn.addEventListener("click", function (e) {

        e.preventDefault();

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            darkBtn.innerHTML = "☀️ Light Mode";

        } else {

            darkBtn.innerHTML = "🌙 Dark Mode";

        }

    });

}

// ==========================
// Search Box
// ==========================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keydown", function (e) {

        if (e.key === "Enter") {

            e.preventDefault();

            const keyword = this.value.trim().toLowerCase();

            switch (keyword) {

                case "technology":
                    window.location.href = "technology.html";
                    break;

                case "ai":
                case "ai tools":
                    window.location.href = "ai-tools.html";
                    break;

                case "freelancing":
                    window.location.href = "freelancing.html";
                    break;

                case "health":
                    window.location.href = "health.html";
                    break;

                case "beauty":
                    window.location.href = "beauty.html";
                    break;

                case "fitness":
                    window.location.href = "fitness.html";
                    break;

                default:
                    alert("No article found.");
            }

        }

    });

}

// ==========================
// Scroll Progress Bar
// ==========================

window.addEventListener("scroll", function () {

    const winScroll = document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    const progress = document.getElementById("progress-bar");

    if (progress) {
        progress.style.width = scrolled + "%";
    }

});
