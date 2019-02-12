function router() {
    const page = location.hash.split("=")[1];
    
    if (page && page.includes('details')){
        var id = page.split('/')[1]
        detailController(id);
        return;
    }
    if (page && page.includes('Buy')){

        var id = +page.split('/')[1]
        buyTicketsController(id);
        return;
    }
    switch (page) {
            case 'home' : homeController(); break;
            case 'login' : userController();break;
            case 'cinemas' : cinemasController(); break;
            case 'program' : programController(); break;
            case 'imax' : imaxController(); break;
            case 'premium': premiumController(); break;
            case 'luxe': luxeController(); break;
            case 'vip': vipController();break;
    
    default: homeController();
    }
    


   
}

$(window).on('hashchange', router);
router();


