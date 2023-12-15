let LivingCreatures = require ("./livingCreatures")

module.exports =  class Bee  extends LivingCreatures{
    constructor(x,y){
    super(x,y)
        this.energy = 20;
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

   choosCell(char1) {
        this.getNewCoordinates()
        

   

        return super.choosCell(char1)
    }

    mul(){
        this.multiply++
        this.energy -= 2
        
        let emptyCells = this.choosCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if(newCell && this.multiply >= 6 && this.energy >= 1 ){
       
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY] [newX] = 9

            let bee = new Bee(newX,newY)
            beeArr.push(bee)


            this.multiply = 0 

        }if(this.energy <= 0){
           this.die()
        }
      
        
        
    }
    die(){
        
            matrix[this.y][this.x] = 0
            for (let i in beeArr) {
    
                if (this.x == beeArr[i].x && this.y == beeArr[i].y) {
                    beeArr.splice(i,1)
                    break
    
                }
            }
        }
    

  
    }
