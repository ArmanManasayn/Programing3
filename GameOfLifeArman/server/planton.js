let LivingCreatures = require ("./livingCreatures")

module.exports = class Planton extends LivingCreatures {

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

    mul() {
        this.multiply++
        let emptyCells = this.choosCell(10)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell && this.multiply >= 3) {

            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 20

            let pt = new Planton(newX, newY)
            PtArr.push(pt)



        }
    }

   
         
          
   
 
}

