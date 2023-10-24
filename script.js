const gameBoard = (() => {
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    const render = () => {
        const gameBoardContainer = document.querySelector("#board");
        
        gameBoardContainer.innerHTML = "";
        
        gameBoard.forEach((cell, index) => {
            gameBoardContainer.innerHTML += `
                <div class="cell" data-index="${index}">
                    ${cell === "" 
                        ? "" 
                        : cell === "x" 
                        ? '<img src="/assets/icon-x.svg">' 
                        : '<img src="/assets/icon-o.svg">'
                    }
                </div>
            `;
        });

        const cells = document.querySelectorAll(".cell");

        cells.forEach(cell => {
            cell.addEventListener("click", event => {
                if (game.isWon(gameBoard)) {
                    return;
                };

                game.placeMark(event.target);
            });
        });
    };

    const getGameBoard = () => {
        return gameBoard;
    };

    const reset = () => {
        gameBoard = ["", "", "", "", "", "", "", "", ""];
    };

    return { render, getGameBoard, reset };
})();

const game = (() => {
    let xTurn;
    
    const start = () => {
        xTurn = true;

        gameBoard.render();
    };

    const placeMark = (cell) => {
        const board = gameBoard.getGameBoard();
        const index = cell.dataset.index;
        
        if (board[index] !== "") {
            return;
        };
        
        if (xTurn) {
            board[index] = "x";
            
            turnDisplay.update("x");
        } else {
            board[index] = "o";

            turnDisplay.update("o");
        };

        xTurn = !xTurn;
        
        gameBoard.render();
        
        
        // -------------------------
        if (isDraw(board)) {
            console.log("its a draw!");
        } else if (isWon(board) === "x") {
            console.log("the winner is x!");
        } else if (isWon(board) === "o") {
            console.log("the winner is o!");
        };
    };
    
    const isWon = (board) => {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];

            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            };
        };

        return null;
    };

    const isDraw = (board) => {
        return board.every(square => square === "x" || square === "o");
    };

    const restart = () => {
        xTurn = true;
        
        turnDisplay.reset();

        gameBoard.reset();
        gameBoard.render();
    };

    return { start, placeMark, isWon, isDraw, restart };
})();

const turnDisplay = (() => {
    const turnIcon = document.querySelector(".turn-img");

    const update = (mark) => {
        if (mark === "x") {
            turnIcon.src = "/assets/icon-o.svg";
        } else {
            turnIcon.src = "/assets/icon-x.svg";
        };
    };

    const reset = () => {
        turnIcon.src = "/assets/icon-x.svg";
    };
    
    return { update, reset };
})();

document.querySelector(".restart").addEventListener("click", event => {
    game.restart();
});

game.start();








// function createPlayer (mark) {
//     let points = 0;
    
//     const getPoints = () => points;
//     const givePoints = () => points++;

//     return { mark, getPoints, givePoints };
// };


// const score = (() => {
    // let xPoints = 0;
    // let oPoints = 0;
    // let draws = 0;
    
//     const render/display/start = () => {
//         
//     };

//     const update = () => {
//          const board = gameBoard.getGameBoard();
//          if (game.isDraw(board)) -> draws++
//          if (game.isWon(board)) -> xPoints++
//          if (game.isWon(board)) -> xPoints++
//     };

//     return { render };
// })();


// on start display UI (score)
// add winning message
// next round button