/* -----------------------------------------------
    Fichier JS
----------------------------------------------- */

// Vérification de la bonne connexion
console.log("Connexion JS - Ok")

//animation target
$("#target").hide()
const target = document.getElementById("target")
const button = document.getElementById("button")
let timerNum = 90
$("button").click( function () {
    clearInterval(timerFunction);
    clearInterval(targetInterval);
    start()
    interval()
    timer()
    timerNum = 90
})

function start (){
    let randomNumber = Math.floor(Math.random() * 80) +10;
    let randomNumber2 = Math.floor(Math.random() * 80) +10;
    $("#target").css("top", randomNumber + '%')
    $("#target").css("left", randomNumber2 + '%')
    $("#target").show()
}

let score = 0

$("#target").click(function(){
    $("#target").hide()
    score++
    $("#score").html("Score : " + score)
    timePaste = 0
})

let timePaste = 0
let targetInterval
function interval() {
    console.log('interval')
    targetInterval = setInterval(function () {
        console.log('timeout')
        timePaste++
        console.log(timePaste)
        if (timePaste == 3) {
            start()
            timePaste = 0
        }
    }, 1000)
}


let timerFunction
function timer() {
    timerFunction = setInterval(function () {
        timerNum--
        cross()
        $("#timer").html("Timer : " + timerNum)
        if (timerNum == 0) {
            console.log('fini')
            clearInterval(timerFunction);
            clearInterval(targetInterval);
            $("#target").hide()
        }
    },1000)
}

function cross() {
    if (timerNum == 80) {
        console.log('oui')
        $("#crossScreen").css("right", "0")
    }
    
}




