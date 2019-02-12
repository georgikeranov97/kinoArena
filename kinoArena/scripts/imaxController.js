function imaxController(){
    $.get('imax.htm').then(text=>{
        $('main').html(text);
        
    })
}