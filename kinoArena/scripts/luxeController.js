function luxeController(){
    $.get('luxe.htm').then(text=>{
        $('main').html(text);
        
    })
}