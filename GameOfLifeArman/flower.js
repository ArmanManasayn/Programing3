


class Flower extends LivingCreatures{
    constructor(x,y){
     super(x,y)
        this.energy = 30;


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
     
    choosCell(char){


        return super.choosCell(char)
    }

    mul(){
        this.multiply++
        this.energy--
        let emptyCells = this.choosCell(0)
        let newCell = random(emptyCells)

        if(newCell && this.multiply >= 6 && this.energy >= 1 ){
       
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY] [newX] = 5

            let flower = new Flower(newX,newY)
            flowerArr.push(flower)

            this.multiply = 0 

        }if(this.energy <= 0){
           this.die()
        }
      
        
        
    }
    die(){
        
            matrix[this.y][this.x] = 0
            for (let i in flowerArr) {
    
                if (this.x == flowerArr[i].x && this.y == flowerArr[i].y) {
                    flowerArr.splice(i,1)
                    break
    
                }
            }
        }
    

  
    }
