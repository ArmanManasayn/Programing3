let LivingCreatures = require ("./livingCreatures")

module.exports =  class Fish extends LivingCreatures{
    constructor(x,y) {
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


    choosCell(char) {
        this.getNewCoordinates()

        return super.choosCell(char)
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