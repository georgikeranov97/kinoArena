function buyTicketsController(id){
$.get('buyingTickets.htm').then( text=> {
        $('main').html(text);
        manageBuying();
    })
    console.log('vlezna tuk')
}