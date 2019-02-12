function vipController(){
    $.get('vip.htm').then(text=>{
        $('main').html(text);
        
    })
}