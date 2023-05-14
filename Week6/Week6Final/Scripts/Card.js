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
export default Card;