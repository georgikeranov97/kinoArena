function router() {
    const page = location.hash.split("=")[1];
    
    if (page.includes('details')){
        console.log(page)
        var id = page.split('/')[1]
        console.log(id)
        detailController(id);
        return;
    }
    switch (page) {
            case 'home' : homeController(); break;
            case 'login' : userController();break;
            case 'cinemas' : cinemasController(); break;
            case 'program' : programController(); break;
    
    default: homeController();
    }
    


   
}

$(window).on('hashchange', router);
router();


