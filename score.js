// Iteration 8: Making scoreboard functional

var URLParams=new URLSearchParams(window.location.search);
console.log(URLParams)
var score=URLParams.get("score");

var scoreboard=document.getElementById("score-board")
scoreboard.innerHTML=score
var again=document.getElementById("play-again-button")
again.onclick=()=>{
    location.href="index.html"
}