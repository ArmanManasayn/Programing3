class FishEater {
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