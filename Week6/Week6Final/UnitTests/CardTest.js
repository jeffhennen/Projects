var expect = chai.expect;

describe('Card Functions', () => {

    describe('Constructor', () => {


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

        let card = new Card("Club", "King", 13);
        it('Should create the card with the value of the card\'s suit equal to param 0', () => {

            expect(card._suit).to.equal("Club");
        });

        it('Should create the card with the value of the card\'s string value equal to the param 1', () =>{

            expect(card._number).to.equal("King");
        });

        it('Should assign the numeric value of the card\'s string value to the card object', () =>{

            expect(card._value).to.equal(13);
        });
    });
});