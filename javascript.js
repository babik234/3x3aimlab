const characters ='0123456789';
const buttons = document.querySelector('.parent').querySelectorAll("div");
let score = 0;
let scoreX = 0;
let vedle = 0;
let bestScore = localStorage.getItem("bestScore");
let finalScore = 0;
let lastScore = localStorage.getItem("lastScore");
let interval = setInterval(check,0)


if (bestScore == null || bestScore == "null") {
    bestScore = 0;
  }
  if (lastScore == null || lastScore == "null") {
    lastScore = 0;
  }

document.getElementById("s").innerHTML = bestScore
document.getElementById("l").innerHTML = lastScore

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  
}

let btn = document.getElementById("button")
btn.addEventListener("click", skore) 

function skore(){
    score = 0

    scoreX = 0

    vedle = 0


document.getElementById("p").innerHTML = "0"
document.getElementById("v").innerHTML = "0"
document.getElementById("x").innerHTML = "0"
}


console.log(generateString());

function button(){
    let number = generateString(Math.floor((Math.random() * 9) + 1))

    for (let x = 0;x<9;x++){
        buttons[x].style.backgroundColor = "white";
    }

 

    if(number.includes("1")){
        document.getElementById('1').style.backgroundColor = "black";
    }
    if(number.includes("2")){
        document.getElementById('2').style.backgroundColor = "black";
    }
    if(number.includes("3")){
        document.getElementById('3').style.backgroundColor = "black";
    }
    if(number.includes("4")){
        document.getElementById('4').style.backgroundColor = "black";
    }
    if(number.includes("5")){
        document.getElementById('5').style.backgroundColor = "black";
    }
    if(number.includes("6")){
        document.getElementById('6').style.backgroundColor = "black";
    }
    if(number.includes("7")){
        document.getElementById('7').style.backgroundColor = "black";
    }
    if(number.includes("8")){
        document.getElementById('8').style.backgroundColor = "black";
    }
    if(number.includes("9")){
        document.getElementById('9').style.backgroundColor = "black";
    }
   
}
function timer(){
    let timeLeft = 29;
    let elem = document.getElementById('c');
    
    let timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == 0) {
        clearTimeout(timerId);
        doSomething();
      } else {
        elem.innerHTML = timeLeft + ' Seconds ';
        timeLeft--;
      }
    }
}


function doSomething(){
    document.getElementById("c").innerHTML = "Game Over"
}


for (let i = 0; i < 9; i++) {
    buttons[i].addEventListener("click", function () {changeColor(i)})
}


document.getElementById("p").innerHTML = "0"
document.getElementById("v").innerHTML = "0"
document.getElementById("x").innerHTML = "0"

function changeColor(index) {
    if(buttons[index].style.backgroundColor === "black"){
        score += 1
        document.getElementById("p").innerHTML = score
    }else if(buttons[index].style.backgroundColor === "white"){
        score -=1
        vedle +=1
        document.getElementById("v").innerHTML = vedle
        document.getElementById("p").innerHTML = score
    }

    buttons[index].style.backgroundColor = "white"
}
 








 function  check(){

    if(  document.getElementById('1').style.backgroundColor === "white" && document.getElementById('2').style.backgroundColor === "white" && document.getElementById('3').style.backgroundColor === "white" && document.getElementById('4').style.backgroundColor === "white" && document.getElementById('5').style.backgroundColor === "white" && document.getElementById('6').style.backgroundColor === "white" && document.getElementById('7').style.backgroundColor === "white" && document.getElementById('8').style.backgroundColor === "white" && document.getElementById('9').style.backgroundColor === "white" ){

        scoreX += 1
        document.getElementById("x").innerHTML = scoreX

        button()

    }}
 
    setInterval(stop,31000)
    



    function stop(){

        for (let x = 0;x<9;x++){
            buttons[x].style.backgroundColor = "white";
        }
    
        clearInterval(interval);
      
         finalScore = score
         lastScore = finalScore
     if(finalScore > bestScore){
        bestScore = finalScore
     }
     localStorage.setItem("bestScore", bestScore);
     localStorage.setItem("lastScore", lastScore);

     document.getElementById("l").innerHTML = lastScore
    document.getElementById("p").innerHTML = score
    document.getElementById("s").innerHTML = bestScore
      
  


    }

    function buttonC(){
        location.reload();
    }