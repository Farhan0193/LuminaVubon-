/* ===========================
   MOBILE MENU
=========================== */

function toggleMenu(){

    const navbar = document.getElementById("navbar");

    if(navbar){
        navbar.classList.toggle("active");
    }

}


/* ===========================
   DARK MODE
=========================== */

const darkBtn = document.getElementById("darkModeBtn");

if(darkBtn){

    darkBtn.addEventListener("click",function(){

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){

            darkBtn.innerHTML="☀️";

            localStorage.setItem("theme","dark");

        }else{

            darkBtn.innerHTML="🌙";

            localStorage.setItem("theme","light");

        }

    });

}


/* LOAD SAVED THEME */

if(localStorage.getItem("theme")=="dark"){

    document.body.classList.add("dark-mode");

    if(darkBtn){
        darkBtn.innerHTML="☀️";
    }

}


/* ===========================
   READING PROGRESS BAR
=========================== */

window.addEventListener("scroll",function(){

    let scrollTop =
    document.documentElement.scrollTop;

    let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    let progress =
    (scrollTop / height) * 100;


    let bar=document.getElementById("progress-bar");

    if(bar){
        bar.style.width=progress+"%";
    }

});


/* ===========================
   SEARCH
=========================== */

const searchInput =
document.getElementById("searchInput");


if(searchInput){

searchInput.addEventListener("keyup",function(){

    let value =
    searchInput.value.toLowerCase();


    let posts =
    document.querySelectorAll(".post");


    posts.forEach(function(post){

        let text =
        post.innerText.toLowerCase();


        if(text.includes(value)){

            post.style.display="block";

        }else{

            post.style.display="none";

        }

    });


});

}


/* ===========================
   CLOSE MENU AFTER CLICK
=========================== */

const navLinks =
document.querySelectorAll(".navbar a");


navLinks.forEach(function(link){

    link.addEventListener("click",function(){

        const navbar =
        document.getElementById("navbar");

        if(navbar){

            navbar.classList.remove("active");

        }

    });

});
