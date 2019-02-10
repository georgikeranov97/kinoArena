function cinemasController() {
    $.get('cinemas.htm').then(text => {
        $('main').html(text);
        cinemasStorage.showCinemas();
    })
}