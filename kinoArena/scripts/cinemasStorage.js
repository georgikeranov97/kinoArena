var kina = []
var cinemasStorage = (function() {
    class Cinema{
        constructor(name,picture,adress){
            this.name=name;
            this.picture=picture;
            this.adress = adress;
            this.movies = [];
        }
        showInDOM(){
            return `<a href="#" >
            <img style="border: 7px solid #888; border-radius: 2px" class="snimkaNaKinoto" src="${this.picture}" alt="cinema picture"></a>
            <p style="color: #fff;" class ="imeNaKInoto"> ${this.name}</p>
            <p style="color: #fff; class="adress">${this.adress}</p>
            `;
        }
    }
    kina =[
        new Cinema('Арена Запад ','assets/images/kino_zapad.jpeg','бул. „Тодор Александров“ 64, 1309 ж.к. Илинден, София'),
        new Cinema('Арена Младост ','assets/images/kino_mladost.jpeg','ул. „Бизнес парк София“ 3, 1766 ж.к. Младост 4, София'),
        new Cinema('Aрена Арена Делукс ','assets/images/kino_bulgaria.jpeg',' бул. „България“ 69, 1404 кв. Манастирски ливади, София' )
    ];
    return {
        showCinemas: function() {
            var container = document.querySelector('.izbroeniKina');
                kina.forEach(kino => {
                var div = document.createElement('div');
                div.style.display = 'inline-block';
                div.style.textAlign = 'center';
                div.style.marginLeft = '40px';
                div.innerHTML = kino.showInDOM();
                container.appendChild(div);
            });
        }
    }
    

    // document.addEventListener("DOMContentLoaded", function(event) {
    //     var forChooseCinema = $('#chooseCinema')
    //     kina.forEach(k=>{
    //         const option = new Option(k.name, k.name);
    //         $("#chooseCinema").append(option);
    //     })
    //     var forChooseCinema = $('#chooseMovie')
    //     allMovies.forEach(m=>{
    //         const option = new Option(m.title, m.title);
    //         $("#chooseMovie").append(option);
    //     })
        

    //     kina.forEach(k=>{
    //         const div = document.createElement('div')
    //         div.innerHTML=  k.showInDOM()
    //         $('.izbroeniKina').append(div)
    //     })
    // })

    // var o = new Option("option text", "value");
    // /// jquerify the DOM object 'o' so we can use the html method
    // $(o).html("option text");
    // $("#selectList").append(o);

})();

