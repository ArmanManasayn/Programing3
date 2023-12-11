let LivingCreatures = require ("./livingCreatures")

module.exports = class Shark   extends LivingCreatures {
    constructor(x, y) {
  super(x,y)
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


    choosCell(char, char1, char2) {
        this.getNewCoordinates()


        return super.choosCell(char,char1,char2)
    }



    eat() {
        let foods = this.choosCell(13, 15)
        let food = random(foods)

        if (food) {

            let newX = food[0]
            let newY = food[1]

            matrix[newY][newX] = 16
            matrix[this.y][this.x] = 10



            for (let i in fishArr) {
                if (newX == fishArr[i].x && newY == fishArr[i].y) {
                    fishArr.splice(i, 1)

                    break;
                }
            }
            for (let i in fishEaterArr) {
                if (newX == fishEaterArr[i].x && newY == fishEaterArr[i].y) {
                    fishEaterArr.splice(i, 1)

                    break;
                }
            }
            if (this.energy <= 0) {
                for (let i in RainArr) {
                    if (newX == RainArr[i].x && newY == RainArr[i].y) {
                        RainArr.splice(i, 1)

                        break;
                    }
                }
            }


            this.x = newX
            this.y = newY



        }
        this.move()

    }




    move() {
        
        this.energy--
        let emptyCells = this.choosCell(10)
        let newCell = random(emptyCells)

        if (newCell) {


            let newX = newCell[0]
            let newY = newCell[1]




            matrix[newY][newX] = 16
            matrix[this.y][this.x] = 10


            this.x = newX
            this.y = newY

            if (this.energy <= 0) {
                this.die()


            }


        }

    }

    die() {

        matrix[this.y][this.x] = 20
        let pt = new Planton(this.x, this.y)
        PtArr.push(pt)

        for (let i in sharkArr) {

            if (this.x == sharkArr[i].x && this.y == sharkArr[i].y) {
                sharkArr.splice(i, 1)

                break

            }
        }
    }

}


