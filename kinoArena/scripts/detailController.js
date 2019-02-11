function detailController(id){
    // const movie = allMovies.filter(m=>m.id === id)
    console.log('details')
$.get('detailMovie.htm').then( text=> {
        $('main').html(text);
    })
}
//     var movie = allMovies.find(m=>m.id === id);
//     var templateString = document.getElementById('detail_movie').innerHTML;
//     var template = Handlebars.compile(templateString);
//     var html=template(movie);
//     document.getElementsByTagName('main')[0].innerHTML=html;
// })
// }

    // var movie=1;
    // var templateString = document.getElementById('detail_movie').innerHTML
    // var template = Handlebars.compile(templateString)
    // var html=template(movie)
    // document.getElementById('main').innerHTML=html;

// $.get('..cinemas.htm').then(text =>{
//     var templateString = document.getElementById('detail_movie').innerHTML
//     var template = Handlebars.compile(templateString)
//     var html=template(movie)
//     document.getElementById('main').innerHTML=html;
// })
// }