let socket = io();

let weather = "";

let winther = document.getElementById("winter");
winther.addEventListener("click", Whiner)

let summer = document.getElementById("summer");
summer.addEventListener("click", Summer)

let autumn = document.getElementById("autumn");
autumn.addEventListener("click", Autumn)

function Whiner() {
    weather = "whinter"
    console.log(weather);
}
function Summer() {
    weather = "summer"
    console.log(weather);
}

function Autumn() {
    weather = "autumn"
    console.log(weather);

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
                        text("❄️", x * side, y * side + 32)
                } if (weather === "summer") {
                    fill("green")
                    rect(x * side, y * side, side, side)
                    textSize(side - 12).
                        text("🌱", x * side, y * side + 32)
                }
                if (weather === "autumn") {
                    fill("orange")
                    rect(x * side, y * side, side, side)
                    textSize(side - 12).
                        text("🍁", x * side, y * side + 32)

                }


            } else if (matrix[y][x] == 2) {
                if (weather === "whinter") {

                }
             
                else if (weather = "summer") {
               
                    fill("yellow")
                    rect(x * side, y * side, side, side)
                    textSize(side - 12)
                    text("🐛", x * side, y * side + 32)
                }
             
            } else if (matrix[y][x] == 3) {
                if (weather === "whinter") {

                }

                if (weather === "summer") {

                    fill("grey")
                    rect(x * side, y * side, side, side)
                    textSize(side - 12)
                    text("🌪", x * side, y * side + 32)
                }
            }
            else if (matrix[y][x] == 4) {
                if (weather === "whinter") {

                }
                else if (weather = "summer") {
                    fill("pink")
                    rect(x * side, y * side, side, side)
                    textSize(side - 12)
                    text("🌷", x * side, y * side + 32)
                }
            } else if (matrix[y][x] == 5) {
                if (weather === "whinter") {

                }
                else if (weather = "summer") {
                    fill("yellowgreen")
                    rect(x * side, y * side, side, side)
                    textSize(side - 12)
                    text("☘️", x * side, y * side + 32)
                }
            }
            else if (matrix[y][x] == 7) {
                if (weather === "whinter") {

                }
                if (weather === "summer") {
                    fill("orange")
                    rect(x * side, y * side, side, side)
                    textSize(side - 12)
                    text("🐝", x * side, y * side + 32)
                }
            }
            else if (matrix[y][x] == 8) {


                if (weather === "whinter") {
                    fill("white")
                    rect(x * side, y * side, side, side)
                    textSize(side - 12)
                    text("🐻‍❄️", x * side, y * side + 32)
                }


                if (weather === "summer") {
                    fill("Sienna")
                    rect(x * side, y * side, side, side)
                    textSize(side - 12)
                    text("🐻", x * side, y * side + 32)
                }
            }
            else if (matrix[y][x] == 9) {

                if (weather === "whinter") {

                }


                if (weather === "summer") {

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




                if (weather === "summer") {
                    fill("DodgerBlue")
                    rect(x * side, y * side, side, side)
                    textSize(side - 12)
                    text("💧", x * side, y * side + 32)
                }
            }


            else if (matrix[y][x] == 13) {
                if (weather === "whinter") {

                }

                if (weather === "summer") {
                    fill("DodgerBlue")
                    rect(x * side, y * side, side, side)
                    textSize(side - 12)
                    text("🐠", x * side, y * side + 32)
                }
            }

            else if (matrix[y][x] == 15) {

                if (weather === "whinter") {

                }

                if (weather === "summer") {
                    fill("DodgerBlue")
                    rect(x * side, y * side, side, side)
                    textSize(side - 12)
                    text("🐡", x * side, y * side + 32)
                }
            }


            else if (matrix[y][x] == 16) {

                if (weather === "whinter") {

                }

                if (weather === "summer") {
                    fill("Blue")
                    rect(x * side, y * side, side, side)
                    textSize(side - 12)
                    text("🦈", x * side, y * side + 32)
                }
            }

            else if (matrix[y][x] == 20) {
                if (weather === "whinter") {
                   
                    fill("#B3DAF1")
                    rect(x * side, y * side, side, side)
                }

                if (weather === "summer") {
                fill("#CED23A")
                rect(x * side, y * side, side, side)

            }
          
        }

      

            else {

                if (weather === "whinter") {
                   
                    fill("#B3DAF1")
                    rect(x * side, y * side, side, side)
                }

                if (weather === "summer") {
                    fill("#CED23A")
                    rect(x * side, y * side, side, side)
    
                }
    

            }



        }
    }






}

setInterval(
    function () {
        socket.on('send matrix', displayGame)
    }, 100
)
