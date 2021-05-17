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
        crossRight()
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
    for (let i = 0; i < 90; i += 15) {
        if (timerNum <= 75 && timerNum == i) {
            $("#crossScreen").show()
            let randomCross = Math.floor(Math.random() * 80) + 10;
            $("#crossScreen").css("top", randomCross + '%')
            $("#crossScreen").addClass("IG_bonustarget");
            setTimeout(function () {
                $("#crossScreen").removeClass("IG_bonustarget");
            }, 3000)
        }
    }
}


function crossRight() {
    for (let i = 0; i < 90; i += 20) {
        if (timerNum <= 75 && timerNum == i) {
            $("#crossScreenRight").show()
            let randomCross = Math.floor(Math.random() * 80) + 10;
            $("#crossScreenRight").css("top", randomCross + '%')
            $("#crossScreenRight").addClass("IG_bonustargetRight");
            setTimeout(function () {
                $("#crossScreenRight").removeClass("IG_bonustargetRight");
            }, 3000)
        }
    }
}



$("#crossScreen").click(function () {
    score = score + 3
    $("#crossScreen").hide()

})

$("#crossScreenRight").click(function () {
    score = score + 4
    $("#crossScreenRight").hide()

})





