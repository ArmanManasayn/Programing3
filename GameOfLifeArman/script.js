function matrixGenerator(matrixSize, grassCount, grassEaterCount, pretadorCount, flowerCount, beeCount, bearCount, RainCount, GpeopleCount) {
    let matrix = []

    for (let i = 0; i < matrixSize; i++) {
        matrix.push([])
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0)
        }
    }

    matrix[5][5] = 15
    matrix[2][1] = 13
    matrix[7][7] = 16

    for (let i = 0; i < matrixSize; i++) {
        for (let j = 0; j < matrixSize; j++) {

            if (i + j < matrix.length - 6) {
                if (matrix[i][j] == 0) {

                    matrix[i][j] = 10
                }
            }

        }


    }
    for (let i = 0; i < grassCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
        }

    }

    for (let i = 0; i < grassEaterCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
        }

    }
    for (let i = 0; i < pretadorCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
        }

    }
    for (let i = 0; i < flowerCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
        }

    }
    for (let i = 0; i < beeCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 7
        }

    }
    for (let i = 0; i < bearCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 8
        }

    }
    for (let i = 0; i < RainCount; i++) {
        let y = 2; y < matrix.length; y++
        let x = 2; x < matrix.length; x++

        if (matrix[y][x] == 0) {
            matrix[y][x] = 10
        }

    }
    for (let i = 0; i < GpeopleCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 11
        }

    }










    return matrix
}

let matrix = matrixGenerator(20, 25, 13, 7, 7, 2, 12, 2, 1, 1)
let side = 45
let grassArr = []
let grassEaterArr = []
let pretadorArr = []
let flowerArr = []
let beeArr = []
let bearArr = []
let RainArr = []
let GpeopleArr = []
let fishArr = []
let fishEaterArr = []
let PtArr = []
let sharkArr = []

function setup() {
    frameRate(13)
    createCanvas(matrix[0].length * side, matrix.length * side)
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y)
                grassArr.push(grass)
            } else if (matrix[y][x] == 2) {
                let grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
            } else if (matrix[y][x] == 3) {
                let pred = new Pretador(x, y)
                pretadorArr.push(pred)

            } else if (matrix[y][x] == 4) {
                let flower = new Flower(x, y)
                flowerArr.push(flower)
            }
            else if (matrix[y][x] == 7) {
                let bee = new Bee(x, y)
                beeArr.push(bee)
            }
            else if (matrix[y][x] == 8) {
                let bear = new Bear(x, y)
                bearArr.push(bear)
            }
            else if (matrix[y][x] == 10) {
                let rain = new Rain(x, y)
                RainArr.push(rain)
            }
            else if (matrix[y][x] == 11) {
                let gp = new Gpeople(x, y)
                GpeopleArr.push(gp)
            }

            else if (matrix[y][x] == 13) {
                let fish = new Fish(x, y)
                fishArr.push(fish)
            }
            else if (matrix[y][x] == 15) {
                let fEater = new FishEater(x, y)
                fishEaterArr.push(fEater)
            }
            else if (matrix[y][x] == 16) {
                let shark = new Shark(x, y)
                sharkArr.push(shark)
            }
            else if (matrix[y][x] == 20) {
                let pt = new Planton(x, y)
                PtArr.push(pt)
            }


        }
    }

}

function draw() {
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
            else if (matrix[y][x] == 11) {
                fill("LightCyan")
                rect(x * side, y * side, side, side)
                textSize(side - 12)
                text("🙎‍♂️", x * side, y * side + 32)
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

            else {

                fill("#CED23A")
                rect(x * side, y * side, side, side)

            }



        }
    }

    for (let i in grassArr) {
        grassArr[i].mul()
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
    }
    for (let i in pretadorArr) {
        pretadorArr[i].eat()
    }
    for (let i in flowerArr) {
        flowerArr[i].mul()
    }
    for (let i in beeArr) {
        beeArr[i].mul()
    }
    for (let i in bearArr) {
        bearArr[i].eat()
    }
    for (let i in GpeopleArr) {
        GpeopleArr[i].move()
    }

    for (let i in fishArr) {
        fishArr[i].move()
    }
    for (let i in fishEaterArr) {
        fishEaterArr[i].eat()
    }
    for (let i in sharkArr) {
        sharkArr[i].eat()
    }
    for (let i in PtArr) {
        PtArr[i].mul()
    }



}

