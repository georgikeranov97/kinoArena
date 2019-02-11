var numberTicket = 4000;
var ticketsPrice = 12;


class Ticket {
    constructor(row, numberSeat) {
        this.price = ticketsPrice;
        this.row = row;
        this.numberSeat = numberSeat;
        this.owner = null
        this.numberTicket = ++numberTicket;
        this.cinema=null;
    }
}
