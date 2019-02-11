function router() {
    let current = userStorage.getCurrentUser();
    const page = location.hash.split("=")[1];
    
    if (page && page.includes('details')){
<<<<<<< HEAD
=======
        console.log(page)
>>>>>>> refs/remotes/origin/master
        var id = page.split('/')[1]
        detailController(id);
        return;
    }
    if (page && page.includes('Buy')){

        var id = +page.split('/')[1]
        buyTicketsController(id);
        return;
    }
    // if(page[1] == 'lubimi' && !current ){
    //     page[1] ='login';
    }
    switch (page) {
            case 'home' : homeController(); break;
            case 'login' : userController();break;
            case 'cinemas' : cinemasController(); break;
            case 'program' : programController(); break;
<<<<<<< HEAD
            // case 'lubimi' : lubimiController();break;
=======
            case 'profile' : profileController(); break;
>>>>>>> refs/remotes/origin/master
    
    default: homeController();
    }
    
}

$(window).on('hashchange', router);
router();


