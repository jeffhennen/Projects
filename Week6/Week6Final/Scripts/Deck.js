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
}

export default Deck;