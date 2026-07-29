const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

function searchArticle(){

const keyword = searchInput.value.trim().toLowerCase();

switch(keyword){

case "technology":
window.location.href="technology.html";
break;

case "ai":
case "ai tools":
window.location.href="ai-tools.html";
break;

case "freelancing":
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

searchBtn.addEventListener("click",searchArticle);

searchInput.addEventListener("keydown",function(e){

if(e.key==="Enter"){

e.preventDefault();
searchArticle();

}

});
