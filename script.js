const gameBoard = (() => {
    const gameBoard = ["", "", "", "", "", "", "", "", ""];

    const render = () => {
        const gameBoardContainer = document.querySelector("#gameboard");

        gameBoard.forEach((square, index) => {
            gameBoardContainer.innerHTML += `
                <div data-index="${index}">${square}</div>
            `;
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

const game = (() => {
    
    const start = () => {


        gameBoard.render();
    };

    return { start };
})();





// document.querySelector("button").addEventListener("click", event => {
//     game.start();
// });