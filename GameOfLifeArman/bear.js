

class Bear {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.energy = 80
        this.directions = []
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


    choosCell(char,char1) {
        this.getNewCoordinates()
        let found = []

        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i])
                }
                if (matrix[y][x] == char1) {
                    found.push(this.directions[i])
                }
                
            }
        }

        return found
    }



    eat() {
        let foods = this.choosCell(7,9)
        let food = random(foods)

        if (food) {
            this.energy += 20
            let newX = food[0]
            let newY = food[1]

            matrix[newY][newX] = 0
            matrix[this.y][this.x] = 0

            for (let i in beeArr) {
                if (newX ==  beeArr[i].x && newY ==  beeArr[i].y) {
                    beeArr.splice(i, 1)

                    break;
                }
            
            }
           
            this.x = newX
            this.y = newY



            
        } else {
            this.move()
        }
    }

    move() {
        let emptyCells = this.choosCell(0)
        let newCell = random(emptyCells)

        if (newCell) {

            this.energy -= 2
            console.log(this.energy);
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 8
            matrix[this.y][this.x] = 0


            this.x = newX
            this.y = newY

           
        }if(this.energy <= 0){
this.die()
        }


    }
    die() {
        matrix[this.y][this.x] = 0
        for (let i in bearArr) {

            if (this.x == bearArr[i].x && this.y == bearArr[i].y) {
                bearArr.splice(i,1)
                break

            }
        }
    }

}

