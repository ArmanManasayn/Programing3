let LivingCreatures = require ("./livingCreatures")

module.exports =  class FishEater extends LivingCreatures {
    constructor(x, y) {
        super(x, y)
        this.energy = 50

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

    choosCell(char) {
        this.getNewCoordinates()

        return super.choosCell(char)





    }




    eat() {
        let foods = this.choosCell(13)
        let food = random(foods)

        if (food) {
            this.energy += 3
            let newX = food[0]
            let newY = food[1]

            matrix[newY][newX] = 15
            matrix[this.y][this.x] = 10



            for (let i in fishArr) {
                if (newX == fishArr[i].x && newY == fishArr[i].y) {
                    fishArr.splice(i, 1)

                    break;
                }
            }


            this.x = newX
            this.y = newY




        }
        this.move()

    }
    move() {


        let emptyCells = this.choosCell(10)
        let newCell = random(emptyCells)

        if (newCell) {


            let newX = newCell[0]
            let newY = newCell[1]




            matrix[newY][newX] = 15
            matrix[this.y][this.x] = 10


            this.x = newX
            this.y = newY


        }

    }

}