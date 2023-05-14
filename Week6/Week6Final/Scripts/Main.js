import War from './War.js';

let game = prompt(`Enter the game you want to play
0) War`);

if(game == '0'){

    let player1Name = prompt(`Enter the name of player1`);
    let player2Name = prompt(`Enter the name of player2`);
    let war = new War(player1Name, player2Name);
    war.playGame();
}