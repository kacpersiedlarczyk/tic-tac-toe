const gameBoard = (() => {
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    const render = () => {
        const gameBoardContainer = document.querySelector("#board");
        
        gameBoardContainer.innerHTML = "";
        
        gameBoard.forEach((square, index) => {
            gameBoardContainer.innerHTML += `
                <div class="square" data-index="${index}">${square}</div>
            `;
        });

        const squares = document.querySelectorAll(".square");

        squares.forEach(square => {
            square.addEventListener("click", event => {
                game.placeMark(event.target, gameBoard);
            });
        });
    };

    const reset = () => {
        gameBoard = ["", "", "", "", "", "", "", "", ""];
    };

    return { render, reset };
})();

// function createPlayer (mark) {
//     let points = 0;
    
//     const getPoints = () => points;
//     const givePoints = () => points++;

//     return { mark, getPoints, givePoints };
// };

const game = (() => {
    let xTurn;
    
    const start = () => {
        xTurn = true;

        // const playerX = createPlayer("X");
        // const playerO = createPlayer("O");

        gameBoard.render();
    };

    const placeMark = (square, board) => {
        const index = square.dataset.index;
        
        if (board[index] !== "") {
            return;
        };

        if (xTurn) {
            board[index] = "x";
        } else {
            board[index] = "o";
        };

        xTurn = !xTurn;
        
        gameBoard.render();
    };
    
    const reset = () => {
        // ...
        // gameBoard.reset()
        // gameBoard.render();
    };

    return { start, placeMark, reset };
})();

document.querySelector(".btn-new-game").addEventListener("click", event => {
    game.start();
});




// const score = (() => {
    
//     const render = () => {
//         //
//     };

//     return { render };
// })();




// xTurn
// currentPlayer = playerX;

// let players = [];

// const playerX = createPlayer("X");
// const playerO = createPlayer("O");

// players.push(playerX);
// players.push(playerO);

// console.log(playerX.mark);
// console.log(playerO.mark);


// let players = [playerX, playerO];

// players[0].mark => "X";

// console.log(players);




// default/first mark should be an "X"
// start function => what needs to happen when the game starts
// won method should take board as a argument!
// allow player to place thier marks
// create a function that updates the gameBoard array with corresponding mark
// create a varible that stores all winning positions
// add a hover effect with a current mark



 // gameBoard.forEach((square, index) => {
            
        //     let display;
            
        //     if (square === "") {
        //         display = "";
        //     } else if (square === "x") {
        //         display = '<img src="/assets/icon-x.svg">';
        //     } else {
        //         display = '<img src="/assets/icon-o.svg">';
        //     };


        //     gameBoardContainer.innerHTML += `
        //         <div class="square" data-index="${index}">
        //             ${square === "" ? "" 
        //                 : square === "x" ? '<img src="/assets/icon-x.svg">' 
        //                 : '<img src="/assets/icon-o.svg">'
        //             }
        //         </div>
        //     `;
        // });