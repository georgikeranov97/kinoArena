function router(){
    const page = location.hash.split('=')[1];
    console.log(page)
    switch (page){
        case 'index' : homeController(); break  
        // case 'login': loginController(); break
        case 'cinemas': showCinemas();break

        default: homeController(); break
    }
} 
$(window).on('hashchange', router());
router()
