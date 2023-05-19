var expect = chai.expect;
import Card from '../Scripts/Card.js';
import Deck from '../Scripts/Deck.js';

describe('Deck Functions', () => {


        let suitTypes = ["Spades", "Diamonds", "Hearts", "Clubs"];
        let values = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];

        let deck = new Deck();
        let tempDeck = new Deck();

        for(let x = 0; x < suitTypes.length; x++){

            for(let y = 0; y < values.length; y++){

                tempDeck.addCard(new Card(suitTypes[x], values[y], y));
            }
        }

        it(`Test to see if this creates an empty deck.cards array`, () => {

            expect(deck._cards.length).to.equal(0);
        });

        it(`Test to see if add cards to the deck`, () => {

            for(let x = 0; x < suitTypes.length; x++){

                for(let y = 0; y < values.length; y++){
    
                    deck.addCard(new Card(suitTypes[x], values[y], y));
                }
            }

            expect(deck._cards.length).to.equal(52);
        });

        it(`Check to see if the deck is equal to the original deck`, () => {

            deck.shuffle();
            console.table(tempDeck._cards);
            console.table(deck._cards);
            expect(deck._cards).to.deep.equal(tempDeck);
        });

        
        

        

});