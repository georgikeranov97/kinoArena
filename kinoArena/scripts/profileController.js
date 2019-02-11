function profileController() {
    $.get('profile.htm').then(text => {
        $('main').html(text);

        $('#logOutButton').on('click', function() {
            userStorage.logOut();
            location.replace('#page=home');
            $('#loginPage').text('ВХОД');
            $('#loginPage').attr('href', '#page=login');
    
            
        });
    });
}