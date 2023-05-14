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

export default Player;