let LivingCreatures = require ("./livingCreatures")

module.exports = class Grass extends LivingCreatures{
   
    choosCell(char,char1){


        return super.choosCell(char,char1)
    }

    mul(){
        this.multiply++
        let emptyCells = this.choosCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if(newCell && this.multiply >= 5){

            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY] [newX] = 1 

            let grass = new Grass(newX,newY)
            grassArr.push(grass)

            this.multiply = 0 

        }

  
  
    }

   
}