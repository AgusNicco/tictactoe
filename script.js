class Game {

    static table = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
    static hasGameStarted = false;
    static isOturn = false;
    static saveTable;

    static start() {
        let element = document.getElementById("instructions");
        element.innerHTML = "Player 1 is the O, player 2 is the X.<br> Click on a cell to make your move";
        document.getElementById("board").style.display = "table";
        Game.saveTable = document.getElementById("board").innerHTML;
        Game.hasGameStarted = true;
    }

    
    static makeMove(x, y, cellId) {
        if (Game.hasGameStarted && Game.table[y][x] == " ") {
            if (Game.isOturn) {
                Game.table[y][x] = "X";
                document.getElementById(cellId).innerHTML = "<img src = \"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/1200px-Red_X.svg.png\" width = \"15\" height = \"15\">";
            }
            else {
                Game.table[y][x] = "O";
                document.getElementById(cellId).innerHTML = "<img src = \"https://upload.wikimedia.org/wikipedia/commons/9/9e/Blue_circle.png\" width = \"15\" height = \"15\">";
            }
            Game.isOturn = !Game.isOturn;
            Game.isGameOver();
        }
    }
    
    static isGameOver() {
        console.log(Game.table); // Log the current game table
        
        for (let i = 0; i < Game.table[0].length; i++) {
            
            // Vertical check
            if (Game.table[0][i] == "X" && Game.table[1][i] == "X" && Game.table[2][i] == "X") {
                Game.hasGameStarted = false;
                console.log("Game Over: X wins"); // Log the game over message
                document.getElementById("play_again").innerHTML = "X wins!<br>Click to play again."
                document.getElementById("play_again").style.display = "block";
                return true;
            }
            if (Game.table[0][i] == "O" && Game.table[1][i] == "O" && Game.table[2][i] == "O") {
                Game.hasGameStarted = false;
                console.log("Game Over: O wins"); // Log the game over message
                document.getElementById("play_again").innerHTML = "O wins!<br>Click to play again."
                document.getElementById("play_again").style.display = "block";
                return true;
            }
            
            // Horizontal check
            if (Game.table[i][0] == "X" && Game.table[i][1] == "X" && Game.table[i][2] == "X") {
                Game.hasGameStarted = false;
                console.log("Game Over: X wins"); // Log the game over message
                document.getElementById("play_again").innerHTML = "X wins!<br>Click to play again."
                document.getElementById("play_again").style.display = "block";
                return true;
            }
            if (Game.table[i][0] == "O" && Game.table[i][1] == "O" && Game.table[i][2] == "O") {
                Game.hasGameStarted = false;
                console.log("Game Over: O wins"); // Log the game over message
                document.getElementById("play_again").innerHTML = "O wins!<br>Click to play again."
                document.getElementById("play_again").style.display = "block";
                return true;
            }
        }
        
        // Diagonal check
        if (Game.table[0][0] == "X" && Game.table[1][1] == "X" && Game.table[2][2] == "X" || Game.table[2][0] == "X" && Game.table[1][1] == "X" && Game.table[0][2] == "X") {
            Game.hasGameStarted = false;
            console.log("Game Over: X wins"); // Log the game over message
            document.getElementById("play_again").innerHTML = "X wins!<br>Click to play again."
            document.getElementById("play_again").style.display = "block";
            return true;
        }
        if (Game.table[0][0] == "O" && Game.table[1][1] == "O" && Game.table[2][2] == "O" || Game.table[2][0] == "O" && Game.table[1][1] == "O" && Game.table[0][2] == "O") {
            Game.hasGameStarted = false;
            console.log("Game Over: O wins"); // Log the game over message
            document.getElementById("play_again").innerHTML = "O wins!<br>Click to play again."
            document.getElementById("play_again").style.display = "block";
            return true;
        }

        let count = 0;
        for(let y = 0; y < Game.table.length; y++)
            for(let x = 0; x < Game.table[y].length; x++) 
                if (Game.table[y][x] != " ")
                    count++
        if (count >= 9) {
            console.log("It is a draw");
            document.getElementById("play_again").innerHTML = "Game ends in a draw!<br>Click to play again."
            document.getElementById("play_again").style.display = "block";
        }
        
        return false;
    }
    
    static reStart()
    {
        console.log(Game.saveTable);
        document.getElementById("board").innerHTML = Game.saveTable;
        document.getElementById("play_again").style.display = "none";
        Game.hasGameStarted = true;

        for(let y = 0; y < Game.table.length; y++)
            for(let x = 0; x < Game.table[y].length; x++) {
                Game.table[y][x] = " ";
            }
    }
}