function programController() {
    $.get('program.htm').then(text => {
        $('main').html(text);

        cinemasStorage.showCinemas();
    })
}