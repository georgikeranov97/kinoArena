function premiumController(){
    $.get('premium.htm').then(text=>{
        $('main').html(text);
        
    })
}