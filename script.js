// ==========================
// Mobile Menu
// ==========================

function toggleMenu() {

    const navbar = document.getElementById("navbar");

    if(navbar){
        navbar.classList.toggle("active");
    }

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
// Advanced Search System
// ==========================


const searchInput = document.getElementById("searchInput");

const suggestionBox = document.getElementById("suggestions");



const searchData = [

"Technology",
"AI Tools",
"ChatGPT",
"Canva AI",
"Google Gemini",
"Cybersecurity",
"Ethical Hacking",
"Freelancing",
"Fiverr",
"Upwork",
"Online Earning",
"Digital Marketing",
"Web Development",
"Excel Accounting",
"CA Accounting",
"Health",
"Beauty",
"Fitness"

];




// Live Suggestion

if(searchInput && suggestionBox){


searchInput.addEventListener("input", function(){


let value = this.value.toLowerCase();


suggestionBox.innerHTML="";



if(value.length > 0){


let results = searchData.filter(item =>

item.toLowerCase().includes(value)

);



results.forEach(item=>{


let div=document.createElement("div");


div.className="suggestion-item";


div.innerHTML=item;



div.onclick=function(){


searchInput.value=item;


suggestionBox.innerHTML="";


saveSearch(item);


searchPage(item);


};



suggestionBox.appendChild(div);



});



}



});

}




// Previous Search History


function saveSearch(keyword){


let history = JSON.parse(localStorage.getItem("searchHistory")) || [];



history = history.filter(item => item !== keyword);



history.unshift(keyword);



if(history.length > 5){

history.pop();

}



localStorage.setItem(

"searchHistory",

JSON.stringify(history)

);



}





function showHistory(){


let history = JSON.parse(localStorage.getItem("searchHistory")) || [];



if(history.length > 0){


suggestionBox.innerHTML="<b>Previous Search</b>";



history.forEach(item=>{


let div=document.createElement("div");


div.className="suggestion-item";


div.innerHTML=item;



div.onclick=function(){


searchInput.value=item;


searchPage(item);



};



suggestionBox.appendChild(div);



});


}


}



if(searchInput && suggestionBox){


searchInput.addEventListener("focus", showHistory);


}




// Search Page Redirect


function searchPage(keyword){


keyword = keyword.toLowerCase();



switch(keyword){


case "technology":

window.location.href="technology.html";

break;



case "ai":

case "ai tools":

case "chatgpt":

case "canva ai":

case "google gemini":

window.location.href="ai-tools.html";

break;



case "freelancing":

case "fiverr":

case "upwork":

window.location.href="freelancing.html";

break;



case "health":

window.location.href="health.html";

break;



case "beauty":

window.location.href="beauty.html";

break;



case "fitness":

window.location.href="fitness.html";

break;



default:

alert("No article found.");



}


}





// ==========================
// Scroll Progress Bar
// ==========================


window.addEventListener("scroll", function () {


const winScroll = document.documentElement.scrollTop;


const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;


const scrolled = (winScroll / height) * 100;



const progress = document.getElementById("progress-bar");



if(progress){

progress.style.width = scrolled + "%";

}



});
