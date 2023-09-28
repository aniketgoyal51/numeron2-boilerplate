// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

const num1=document.getElementById("number1");
const num2=document.getElementById("number2");
var number1=Math.round(Math.random()*100)
num1.innerHTML=number1;
var number2=Math.round(Math.random()*100)
num2.innerHTML=number2;
// Iteration 3: Creating variables required to make the game functional

var score=0;
var Operators;
const plus=document.getElementById("plus");
const minus=document.getElementById("minus");
const mul=document.getElementById("mul");
const div=document.getElementById("divide");
const mod=document.getElementById("modulus");


// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

var num3=document.getElementById("number3")
var number3
// Iteration 5: Creating a randomise function to make the game functional

function randomise(){
    number1=Math.round(Math.random()*100)
    number2=Math.round(Math.random()*100)

    if(number1<number2){
        extra=number1;
        number1=number2;
        number2=extra;
    }

    Operators=Math.round(Math.random()*5);
    switch(Operators){
        case 1:
            number3=number1+number2;
            break;

        case 2:
            number3=number1-number2;
            break;

        case 3:
            number3=number1*number2;
            break;

        case 4:
            number3=Math.floor(number1/number2);
            break;
        case 5:
            number3=number1%number2;
            break;
        case 0:
            randomise();
    }
    num1.innerHTML=number1;
    num2.innerHTML=number2;
    num3.innerHTML=number3;

    console.log(number1+" "+number2+" "+number3)
}
randomise();
// Iteration 6: Making the Operators (button) functional


plus.onclick=()=>{
    if(number3===number1+number2){
        score++
        randomise()
        resetTimer(timeId);
    }else{
        location.href="gameover.html?score="+score
    }
}
minus.onclick=()=>{
    if(number3===number1-number2){
        score++
        randomise()
        resetTimer(timeId);
    }else{
        location.href="gameover.html?score="+score
    }
}
mul.onclick=()=>{
    if(number3===number1*number2){
        score++
        randomise()
        resetTimer(timeId);
    }else{
        location.href="gameover.html?score="+score
    }
}
div.onclick=()=>{
    if(number3===Math.floor(number1/number2)){
        score++
        randomise()
        resetTimer(timeId);
    }else{
        location.href="gameover.html?score="+score
    }
}
mod.onclick=()=>{
    if(number3===number1%number2){
        score++
        randomise()
        resetTimer(timeId);
    }else{
        location.href="gameover.html?score="+score
    }
}

// Iteration 7: Making Timer functional

var timer=document.getElementById("timer")
var time=20;
var timeId;
function startTimer(){
    time = 20
    timer.innerHTML=time;
    timeId = setInterval(()=>{
        time--;
        if(timer==0) location.href="gameover.html?score="+score;
        timer.innerHTML=time;
    },1000
    )
    
}
function resetTimer(IntervalID){
    clearInterval(IntervalID)
    startTimer()
}
startTimer()