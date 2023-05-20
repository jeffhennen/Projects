var expect = chai.expect;
import Card from '../Scripts/Card.js';
import Deck from '../Scripts/Deck.js';
import Player from '../Scripts/Player.js';

describe('Player Functions', () => {

    describe('Constructor', () => {


        let suitTypes = ["Spades", "Diamonds", "Hearts", "Clubs"];
        let values = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];

        let deck = new Deck();

        for(let x = 0; x < suitTypes.length; x++){

            for(let y = 0; y < values.length; y++){

                deck.addCard(new Card(suitTypes[x], values[y], y));
            }
        }



        let player = new Player("Jeff", deck);
        it('Should test to see the Name of the user is Jeff', () => {

            expect(player._name).to.equal("Jeff");
        });

        it('Size of the player\'s deck equal to 26', () =>{

            expect(player._deck._cards.length).to.equal(52);
        });

        it('Return the value of the scores', () =>{

            expect(player._score).to.equal(0);
        });
        it('Should increment the value of the player\'s score', () => {

            player.addPoints();
            expect(player._score).to.equal(1);
        });

        it('Returns the top card', () => {
  
            let tempCard = deck._cards[deck._cards.length - 1];
            expect(player.drawCard()).to.equal(tempCard);
        })
    });
});