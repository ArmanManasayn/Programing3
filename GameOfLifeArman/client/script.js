let socket = io();

let weather = "";

let winther = document.getElementById("winter");
winther.addEventListener("click", Whiner)

let summer = document.getElementById("summer");
summer.addEventListener("click", Summer)

function Whiner() {
    weather = "whinter"
}
function Summer() {
    weather = "summer"
}

let side = 40;

function setup() {
    frameRate(15)
    createCanvas(20 * side, 20 * side)


}


function displayGame(matrix) {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                if (weather === "whinter") {
                    fill("white")
                    rect(x * side, y * side, side, side)
                    textSize(side - 12).
                    text("🧊", x * side, y * side + 32)
                } else if (weather === "summer") {
                    fill("green")
                    rect(x * side, y * side, side, side)
                    textSize(side - 12).
                        text("🌱", x * side, y * side + 32)
                }
            } else if (matrix[y][x] == 2) {
                if (weather === "whinter") {
             
            }else if (weather = "summer"){
                fill("yellow")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🐛", x * side, y * side + 32)
                }
            } else if (matrix[y][x] == 3) {
                fill("grey")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🌪", x * side, y * side + 32)
            }
            else if (matrix[y][x] == 4) {
                if (weather === "whinter") {
          
                }else if (weather ="summer") {
                    fill("pink")
                    rect(x * side, y * side, side, side)
                    textSize(side - 12)
                    text("", x * side, y * side + 32)
                }
            } else if (matrix[y][x] == 5) {
                if (weather === "whinter") {
          
            } else if(weather = "summer"){
  fill("yellowgreen")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("☘️", x * side, y * side + 32)
            }
        }
            else if (matrix[y][x] == 7) {
                if (weather === "whinter") {
          
                } 
                if (weather === "summer"){
                fill("orange")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🐝", x * side, y * side + 32)
            }
        }
            else if (matrix[y][x] == 8) {
                if (weather === "whinter") {
                    fill("Lighter")
                    rect(x * side, y * side, side, side)
                    textSize(side - 12)
                    text("🐻‍❄️", x * side, y * side + 32)
                } 




                if (weather === "summer"){
                fill("Sienna")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🐻", x * side, y * side + 32)
                }
            }
            else if (matrix[y][x] == 9) {

                if (weather === "whinter") {
          
                } 


                if (weather === "summer"){

                fill("Tomato")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🍯", x * side, y * side + 32)
            }
        }
            else if (matrix[y][x] == 10) {


                if (weather === "whinter") {
                    fill("DodgerBlue")
                    rect(x * side, y * side, side, side)
                    textSize(side - 12)
                    text("🧊", x * side, y * side + 32)
                } 




                if (weather === "summer"){
                fill("DodgerBlue")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("💧", x * side, y * side + 32)
                }
            }


            else if (matrix[y][x] == 13) {
                fill("DodgerBlue")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🐠", x * side, y * side + 32)
            }
            else if (matrix[y][x] == 14) {
                fill("DarkRed")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🌹", x * side, y * side + 32)
            }
            else if (matrix[y][x] == 15) {
                fill("DodgerBlue")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🐡", x * side, y * side + 32)
            }
            else if (matrix[y][x] == 16) {
                fill("Blue")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🦈", x * side, y * side + 32)
            }
            else if (matrix[y][x] == 20) {
                fill("#CED23A")
                rect(x * side, y * side, side, side)

            }

            else if (matrix[y][x] == 30) {

                fill("DodgerBlue")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🧊", x * side, y * side + 32)
            }

            else {

                fill("#CED23A")
                rect(x * side, y * side, side, side)

            }



        }
    }






}

setInterval(
    function () {
        socket.on('send matrix', displayGame)
    }, 100
)
