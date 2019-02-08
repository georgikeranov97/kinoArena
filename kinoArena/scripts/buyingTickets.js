var numberTicket=4000;
class Ticket{
    constructor(number, price, movieTitle){
        this.number=number;
        this.price=price;
        this.movieTitle=movieTitle;
        this.owner=null
        this.numberTicket=++numberTicket;
    }
    
}