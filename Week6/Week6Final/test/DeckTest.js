var expect = chai.expect;

describe('Deck Functions', () => {


        let suitTypes = ["Spades", "Diamonds", "Hearts", "Clubs"];
        let values = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
        

        class Card{

            constructor(suit, number, value){
        
                this._suit = suit;
                this._value = value;
                this._number = number;
            }
        
            get suit(){
        
                return this._suit;
            }
        
            get value(){
        
                return this._value;
            }
        
            get number(){
        
                return this._number;
            }
            
        }

        class Deck{

            constructor(){
        
                
                this._cards = [];
            };
        
            shuffle(){
        
                for(let i = 0; i < 4; i++){
                    for(let x = 0; x < this._cards.length; x++){
        
                        let shuffle = Math.floor(Math.random() * (this._cards.length));
        
                        let temp = this._cards[x];
                        this._cards[x] = this._cards[shuffle];
                        this._cards[shuffle] = temp;
                    }
                }
            };
        
            addCard(card){
        
                this._cards.push(card);
            }
        
            drawCard(){
        
                let card = this._cards[this._cards.length - 1];
                this._cards.pop();
                return card;
            }
        
            displayDeck(){
        
                console.table(this._cards);
            }
        
            getCard(index){
        
                return this._cards[index];
            }

            get cards(){

                return this._cards;
            }
        }

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