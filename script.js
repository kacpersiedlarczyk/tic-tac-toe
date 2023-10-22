const gameBoard = (() => {
    const gameBoard = ["", "", "", "", "", "", "", "", ""];

    const render = () => {
        const gameBoardContainer = document.querySelector("#board");

        gameBoard.forEach((square, index) => {
            gameBoardContainer.innerHTML += `
                <div class="square" data-index="${index}">${square}</div>
            `;
        });

        gameBoardContainer.addEventListener("click", event => {
            if (event.target.className != "square") {
                return;
            };

            console.log(event.target);
            // game.placeMark();
        });
    };

    return { render };
})();

function createPlayer (mark) {
    let points = 0;
    
    const getPoints = () => points;
    const givePoints = () => points++;

    return { mark, getPoints, givePoints };
};

const score = (() => {
    
    const render = () => {
        //
    };

    return { render };
})();

const game = (() => {
    // let xTurn;
    
    const start = () => {
        // const playerX = createPlayer("X");
        // const playerO = createPlayer("O");

        gameBoard.render();
    };

    const placeMark = () => {
        //
    };

    const reset = () => {
        //
    };

    return { start, placeMark, reset };
})();






// document.querySelector(".btn-new-game").addEventListener("click", event => {
//     game.start();
// });






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
// style the board
// add a hover effect with a current mark

