class Fish {
    constructor(x,y) {
        this.x = x
        this.y = y
        this.energy = 50
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
        console.log("aaaa" , this.x,this.y);
        let emptyCells = this.choosCell(10)
        let newCell = random(emptyCells)

        if (newCell) {
           
            
            let newX = newCell[0]
            let newY = newCell[1]

           
 
    
                matrix[newY][newX] = 13
                matrix[this.y][this.x] = 10
             

            this.x = newX
            this.y = newY

             
        }
        if (this.energy <= 0) {
            this.die()
           
        }

    }
    die() {
        matrix[this.y][this.x] = 10
        
        for (let i in fishArr) {

            if (this.x == fishArr[i].x && this.y == fishArr[i].y) {
                fishArr.splice(i,1)
                
                break

            }
        }
    }
    
}