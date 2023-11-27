class Pretador {
    constructor(x, y,) {
        this.x = x
        this.y = y
        this.energy = 12
        this.direction = []
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    choosCell(char1, char2,char3,char4,char5) {
        this.getNewCoordinates()
        let found = []

        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char1) {
                    found.push(this.directions[i])
                }
                if (matrix[y][x] == char2) {
                    found.push(this.directions[i])
                }
                if (matrix[y][x] == char3) {
                    found.push(this.directions[i])
                }
                if (matrix[y][x] == char4) {
                    found.push(this.directions[i])
                }
                if (matrix[y][x] == char5) {
                    found.push(this.directions[i])
                }
                
            }
        }

        return found
    }


    mul() {
        let emptyCells = this.choosCell(0)
        let newCell = random(emptyCells)

        if (newCell) {

            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 3

            let pred = new Pretador(newX, newY)
            pretadorArr.push(pred)



        }
    }



    eat() {
        let foods = this.choosCell(1,2,5,9,14)
        let food = random(foods)

        if (food) {
            this.energy += 10
            let newX = food[0]
            let newY = food[1]

            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0

            for (let i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1)

                    break;
                }
            }
            for (let i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                   grassEaterArr.splice(i, 1)

                    break;
                }
            }
            for (let i in flowerArr) {
                if (newX == flowerArr[i].x && newY == flowerArr[i].y) {
                    flowerArr.splice(i, 1)

                    break;
                }
            }
            for (let i in beeArr) {
                if (newX == beeArr[i].x && newY == beeArr[i].y) {
                    beeArr.splice(i, 1)

                    break;
                }
            }
            for (let i in GpeopleArr) {
                if (newX == GpeopleArr[i].x && newY == GpeopleArr[i].y) {
                    GpeopleArr.splice(i, 1)

                    break;
                }
            }
          
            for (let i in GpeopleArr) {
                if (newX == GpeopleArr[i].x && newY == GpeopleArr[i].y) {
                    GpeopleArr.splice(i, 1)

                    break;
                }
            }
            
            
            this.x = newX
            this.y = newY



            if (this.energy >= 50) {
                this.mul()
            }
        } else {
            this.move()
        }
    }


    move() {
        let emptyCells = this.choosCell(0)
        let newCell = random(emptyCells)

        if (newCell) {

            this.energy -= 3
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0


            this.x = newX
            this.y = newY

            if (this.energy <= 0) {
                this.die()
            }
        }


    }

    die() {
        matrix[this.y][this.x] = 0
        for (let i in pretadorArr) {

            if (this.x == pretadorArr[i].x && this.y == pretadorArr[i].y) {
                pretadorArr.splice(i,1)
                break

            }
        }
    }
}