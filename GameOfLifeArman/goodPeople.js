class Gpeople {
    constructor(x, y,) {
        this.x = x
        this.y = y
        this.energy = 20
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


    choosCell(char) {
        this.getNewCoordinates()
        let found = []

        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i])
                }
               
               
                
            }
        }

        return found
    }


 





    move() {
        this.energy--
        let emptyCells = this.choosCell(0)
        let newCell = random(emptyCells)

        if (newCell) {

            
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 11
            matrix[this.y][this.x] = 14


            this.x = newX
            this.y = newY

            
        }

        if(this.energy <= 0){
this.die()
        }


    }

    die() {
        matrix[this.y][this.x] = 0
        for (let i in GpeopleArr) {

            if (this.x == GpeopleArr[i].x && this.y == GpeopleArr[i].y) {
                GpeopleArr.splice(i,1)
                break

            }
        }
    }
}