let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let fs = require("fs");


app.use(express.static("../client"));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, () => {
    console.log('connected');
});



function matrixGenerator(matrixSize, grassCount, grassEaterCount, pretadorCount, flowerCount, beeCount, bearCount, RainCount, ) {
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











    return matrix
}
matrix = matrixGenerator(20, 25, 13, 7, 2, 2, 12, 2, 1, 1)

io.sockets.emit('send matrix', matrix)

side = 45
grassArr = []
grassEaterArr = []
pretadorArr = []
flowerArr = []
beeArr = []
bearArr = []
RainArr = []
GpeopleArr = []
fishArr = []
fishEaterArr = []
PtArr = []
sharkArr = []


Grass = require("./grass")
GrassEater = require("./grassEater")
Pretador = require("./pretador")
Bear = require("./bear")
Bee = require("./bee")
Fish = require("./fish")
FishEater = require("./fishEater")
Flower = require("./flower")
Planton = require("./planton")
Rain = require("./Rain")
Shark = require("./shark")

function createObject(matrix) {
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

    io.sockets.emit('send matrix', matrix)


}

function game() {
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
    io.sockets.emit("send matrix", matrix);
}
setInterval(game,100)
    

io.on('connection', function () {
  
    createObject(matrix)
})


let statistic ={
    grass:0,
    grasseater:0,
    predator:0,
    bear:0,
    bee:0,
    fish:0,
    fisheater:0,
    flower:0,
    shark:0,
}
setInterval(function(){
    statistic.grass= grassArr.length;
    statistic.grasseater = grassEaterArr.length;
    statistic.predator = pretadorArr.length;
    statistic.bear = bearArr.length;
    statistic.bee = beeArr.length;
    statistic.fish = fishArr.length;
    statistic.fisheater = fishEaterArr.length;
    statistic.flower= flowerArr.length;
    statistic.shark = sharkArr.length;

    fs.writeFile("statistics.json", JSON.stringify(statistic), function(err){
        console.log("Write count of charackter")
        });
}, 1000)



