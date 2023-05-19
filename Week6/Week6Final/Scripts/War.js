import Player from './Player.js';
import Deck from './Deck.js';
import Card from './Card.js';

class War{

    constructor(player1Name, player2Name){

        this._player1;
        this._player2;
        this._startingDeck = new Deck();
        this._suitTypes = ["Spades", "Diamonds", "Hearts", "Clubs"];
        this._values = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
        this._endingString = "";
        this.init(player1Name, player2Name);
    }

    init(player1Name, player2Name){

        this.populateDeck();
        this.shuffleDeck();
        this.createPlayers(player1Name, player2Name);
    };

    populateDeck(){

        for(let x = 0; x < this._suitTypes.length; x++){

            for(let y = 0; y < this._values.length; y++){

                this._startingDeck.addCard(new Card(this._suitTypes[x], this._values[y], y));
            }
        }
    };

    shuffleDeck(){

        this._startingDeck.shuffle();
        this._startingDeck.displayDeck();
    };

    splitDecks(){

        let playerDecks =[];
        playerDecks.push(new Deck());
        playerDecks.push(new Deck());

        for(let x = 0; x < 52; x++){

            if(x % 2 == 0){
                playerDecks[0].addCard(this._startingDeck.getCard(x));  
            }else{

                playerDecks[1].addCard(this._startingDeck.getCard(x));
            }
        }

        return playerDecks;

    };

    createPlayers(player1Name, player2Name){

        let playerDecks = this.splitDecks();;

        
        this._player1 = new Player(player1Name, playerDecks[0]);
        this._player2 = new Player(player2Name, playerDecks[1]);

        this._player1.deck.shuffle();
        this._player2.deck.shuffle();
    };

    playGame(){

        for(let x = 0; x < 26; x++){

            this._endingString += `Round ${x}, FIGHT\n\n`;
            this.gameTurn();
             
        }

        this.endGame();
    };

    gameTurn(){

        
        
        let player1Card = this._player1.deck.drawCard();
        let player2Card = this._player2.deck.drawCard();

        let playerThatWonRound = this.scoreCards(player1Card, player2Card);
        if(playerThatWonRound == 1){

            this._player1.addPoints();
            
        }else if (playerThatWonRound == 2){

            this._player2.addPoints();
        }else{
            
            //Round was a Tie
        }
    };

    scoreCards(player1Card, player2Card){

        let roundString = "";
        let player1String = `${this._player1._name} drew the card: ${player1Card.number} of ${player1Card.suit}\n`;
        let player2String = `${this._player2._name} drew the card: ${player2Card.number} of ${player2Card.suit}\n`;
        let playerWon = 0;
        if(player1Card.value > player2Card.value){

            roundString += player1String;
            roundString += player2String;
            roundString += `\n${this._player1.name} won the round, they are awarded one point\n\n\n`;
            playerWon = 1;
        }else if (player2Card.value > player1Card.value){

            roundString += player2String;
            roundString += player1String;
            roundString += `\n${this._player2.name} won the round, they are awarded one point\n\n\n`;
            playerWon = 2;
        }else{

            roundString += player1String;
            roundString += player2String;
            roundString += `\nThe round is a tie, no points awarded\n\n\n`;
        }

        this._endingString += roundString;
        return playerWon;
    };

    endGame(){

        this._endingString += `\n${this._player1._name} has the score of: ${this._player1._score}`;
        this._endingString += `\n${this._player2._name} has the score of: ${this._player2._score}`;
        let player1Win = `\n\n${this._player1._name} won the game with a score of: ${this._player1._score}`;
        let player2Win = `\n\n${this._player2._name} won the game with a score of: ${this._player2._score}`;

        if(this._player1._score > this._player2._score){

            this._endingString += player1Win;
        }else{
            this._endingString += player2Win;
        }

        this._endingString += `\n\nThank you for playing the game War, have a good day\n\n`;

        console.log(this._endingString);
    }
}


export default War;