function lubimiController() {
    $.get('liubimi.htm').then(text => {
        $('main').html(text);
    })
}