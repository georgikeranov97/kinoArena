function showCinemas(){
    console.log('vika me bre')
    $.get('cinemas.htm').then(text=>{
        $('main').html(text)
    })
}