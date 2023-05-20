var expect = chai.expect;
import Card from '../Scripts/Card.js';

describe('Card Functions', () => {

    describe('Constructor', () => {

        console.log("Inside card describe constructor");
        let card = new Card("Club", "King", 13);
        console.log(card);
        it('Should create the card with the value of the card\'s suit equal to param 0', () => {

            console.log("test1");
            expect(card._suit).to.equal("Club");
        });

        it('Should create the card with the value of the card\'s string value equal to the param 1', () => {

            console.log("test2");
            expect(card._number).to.equal("King");
        });

        it('Should assign the numeric value of the card\'s string value to the card object', () => {

            console.log("test3");
            expect(card._value).to.equal(13);
        });
    });
});