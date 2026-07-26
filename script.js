// TechEarn JavaScript

console.log("TechEarn Loaded Successfully!");

// Smooth Scroll
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        if (href && href.startsWith("#")) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Search Button
const searchBtn = document.querySelector(".search-box button");

if (searchBtn) {
    searchBtn.addEventListener("click", function () {
        const keyword = document.querySelector(".search-box input").value;

        if(keyword.trim() !== ""){
            alert("Searching for: " + keyword);
        }else{
            alert("Please enter a keyword.");
        }
    });
}

// Scroll To Top Button
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

window.onscroll = function(){
    if(document.documentElement.scrollTop > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }
}

topBtn.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}function toggleMenu() {
    document.getElementById("navbar").classList.toggle("active");
}function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}
