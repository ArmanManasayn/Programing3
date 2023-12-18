 var socket = io();

var side = 40;

function setup() {
    frameRate(15)
    createCanvas(20 * side, 20* side)


}

function displayGame(matrix) {
   

    for (let y = 0; y < matrix.length; y++) {
        for (x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🌱", x * side, y * side + 32)
            } else if (matrix[y][x] == 2) {
                fill("yellow")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🐛", x * side, y * side + 32)
            } else if (matrix[y][x] == 3) {
                fill("grey")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🌪", x * side, y * side + 32)
            }
            else if (matrix[y][x] == 4) {
                fill("pink")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🌷", x * side, y * side + 32)
            } else if (matrix[y][x] == 5) {
                fill("yellowgreen")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("☘️", x * side, y * side + 32)
            }
            else if (matrix[y][x] == 7) {
                fill("orange")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🐝", x * side, y * side + 32)
            }
            else if (matrix[y][x] == 8) {
                fill("Sienna")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🐻", x * side, y * side + 32)
            }
            else if (matrix[y][x] == 9) {
                fill("Tomato")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🍯", x * side, y * side + 32)
            }
            else if (matrix[y][x] == 10) {

                fill("DodgerBlue")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("💧", x * side, y * side + 32)
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
    },100
)


