

var nomerNaKinoto=0;
class Cinema{
    constructor(name,picture,adress){
        this.name=name;
        this.picture=picture;
        this.movies=allMovies;
        this.adress = adres;
    }
    showInDOM(){
        return `<p class ="imeNaKInoto"> ${this.name}</p>
        <img class="snimkaNaKinoto" src="${this.picture}" alt="cinema picture">
        <p class="adress">${this.adress}</p>
        `
    }
}
var kina =[
    new Cinema('Арена Запад','assets/images/kino_zapad.jpeg','бул. „Тодор Александров“ 64, 1309 ж.к. Илинден, София'),
    new Cinema('Арена Младост','assets/images/kino_mladost.jpeg','ул. „Бизнес парк София“ 3, 1766 ж.к. Младост 4, София'),
    new Cinema('Aрена Арена Делукс','assets/images/kino_bulgaria.jpeg',' бул. „България“ 69, 1404 кв. Манастирски ливади, София' )
] 
document.addEventListener("DOMContentLoaded", function(event) {
    var forChooseCinema = $('#chooseCinema')
    kina.forEach(k=>{
        const option = new Option(k.name, k.name);
        $("#chooseCinema").append(option);
    })
    var forChooseCinema = $('#chooseMovie')
    allMovies.forEach(m=>{
        const option = new Option(m.title, m.title);
        $("#chooseMovie").append(option);
    })
    

    kina.forEach(k=>{
        const div = document.createElement('div')
        div.innerHTML=  k.showInDOM()
        $('.izbroeniKina').append(div)
    })
})

// var o = new Option("option text", "value");
// /// jquerify the DOM object 'o' so we can use the html method
// $(o).html("option text");
// $("#selectList").append(o);
