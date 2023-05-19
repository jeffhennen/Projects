var expect = chai.expect;

describe('Player Functions', () => {

    describe('Constructor', () => {


        let suitTypes = ["Spades", "Diamonds", "Hearts", "Clubs"];
        let values = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
        
        class Player{

            constructor(name, deck){
        
                this._name = name;
                this._deck = deck;
                this._score = 0;
            }
        
            get name(){
        
                return this._name;
            }
        
            get score(){
        
                return this._score;
            }
        
            get deck(){
        
                return this._deck;
            }
        
            addPoints(){
        
                this._score++;
            }
        
            drawCard(){
        
                return this._deck.drawCard();
            }
        }

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