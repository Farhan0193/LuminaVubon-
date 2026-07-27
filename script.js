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

});const darkBtn = document.getElementById("darkModeBtn");

if(darkBtn){
darkBtn.addEventListener("click",function(){

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
darkBtn.innerHTML="☀️ Light Mode";
}else{
darkBtn.innerHTML="🌙 Dark Mode";
}

});
}
