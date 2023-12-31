module.exports = class  LivingCreatures{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.multiply = 0 ; 
        
        
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y ],
            [this.x + 1, this.y ],
            [this.x - 1, this.y + 1],
            [this.x , this.y + 1],
            [this.x + 1, this.y + 1]
            ];


    }

    choosCell(char1, char2,char3,char4,char5) {
        
        let found = []

        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char1) {
                    found.push(this.directions[i])
                }
                if (matrix[y][x] == char2) {
                    found.push(this.directions[i])
                }
                if (matrix[y][x] == char3) {
                    found.push(this.directions[i])
                }
                if (matrix[y][x] == char4) {
                    found.push(this.directions[i])
                }
                if (matrix[y][x] == char5) {
                    found.push(this.directions[i])
                }
                
            }
        }

        return found
    }
}