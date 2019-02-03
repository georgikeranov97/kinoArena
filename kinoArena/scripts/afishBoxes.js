window.addEventListener('DOMContentLoaded', function () {


var id = 0;
class Afish{
    constructor(title,poster,bgLanguage,restrictions,trailerLink,moreLink){
        this.title = title;
        this.poster = poster;
        this.bgLanguage = bgLanguage;
        this.restrictions = restrictions;
        this.trailerLink = trailerLink;
        this.moreLink = moreLink;
        this.id= ++id;
        this.imaLi = false; 
        this.daIzlizatLi=true;
    }
    
    showInDOM(){
        var div = document.createElement('div')
        div.innerHTML=`
        <div class="afish">
            <div class="InnerAfish" id=${this.id}>
                <a href="${this.trailerLink}" class="trailer">
                    <span>
                        <i class="fas fa-play-circle"></i>
                        <p>ТРЕЙЛЪР</p>
                    </span>
                </a>
                <a href="${this.moreLink}"  class="podrobno"> 
                    <span>
                        <i class="fas fa-star"></i>
                    <p>ПОДРОБНО</p>
                    </span>
                </a>
                <a href="#"  class="liubimi">
                    <span>
                        <i class="fas fa-heart"></i>
                        <p>ДОБАВИ В ЛЮБИМИ</p>
                    </span>
                </a>
                <img  src="${this.poster}">
            </div>
            <h3>${this.title}</h3>
            <div class="infoZaFilma">
                <div class="stars">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
                <div class="LanguageAge"><img src="${this.bgLanguage}" alt=""></div>
                <div class="LanguageAge"><img src="${this.restrictions}" alt=""></div>
            </div>
        </div>`
        vkaraiTuk.appendChild(div)
    }
}
var lion = new Afish('Car Luv','assets/images/lionKing.jpg','assets/images/bezOgranichenq.png','assets/images/Dubliran.png','#',"#")
lion.showInDOM()

var dragon = new Afish('How to train dragon','assets/images/poster_1.jpg','assets/images/bezOgranichenq.png','assets/images/Dubliran.png','#','#')
dragon.showInDOM()
var despicable = new Afish('Despicable me 3','assets/images/poster_2.jpg','assets/images/bezOgranichenq.png','assets/images/Dubliran.png','#','#')
despicable.showInDOM()
var beauty = new Afish('Beauty and the Beast','assets/images/poster_3.jpg','assets/images/bezOgranichenq.png','assets/images/Dubliran.png','#','#')
beauty.showInDOM()
dragon.showInDOM()
lion.showInDOM()
despicable.showInDOM()




    var trailerStop = 0;
    var podrobnoStop = 6.25;
    var liubimiStop=12.5;
    var step = 0.125;
    // var imaLi = false; 
    // var daIzlizatLi=true; 
// ako imaLi e true, veche izlizaneto na kutiite e zapochnalo i ne moje da se izvika otnovo, dokato 
// ne se priberat ili mishkata ne napusne poleto.
//V nachaloto e false, sled kato se izvika funkciqta za izlizane stawa true
// na vsqka stypka ot funkciqta se pita daIzlizatLi, ako e false, trqbwa da sprat da izlizat, znachi
// e zadejstvana funkciqta za pribirane
var moveBoxes= function moveBoxes(movie){
    if(movie.imaLi===true){return}
    movie.imaLi=true;
    var trailer = movie.getElementsByClassName('trailer')[0];
    var podrobno = movie.getElementsByClassName('podrobno')[0];
    var liubimi = movie.getElementsByClassName('liubimi')[0];
    moveOneByOne(trailer,trailerStop);
    moveOneByOne(podrobno,podrobnoStop);
    moveOneByOne(liubimi,liubimiStop)

    function moveOneByOne(obj,objStop){ 
        var direction='down'
        var mop=-6.25;
 
    var id2 = setInterval(stepByStep,1)
        function stepByStep(){ 
            if(movie.daIzlizatLi === false){
                movie.imaLi=false;
                clearInterval(id2);
                return;
            }
            if (direction==='down'){
                mop+=step;
            }
            if( direction==='up'){
                if(mop==objStop){
                     clearInterval(id2) 
                     return;
                } 
                mop-=step
            }
            if(mop == (objStop +3.75)){
                direction = 'up'                    
            }
            obj.style.top= mop+'em';
        }           
   }      
}

   var removeBoxes= function removeBoxes(movie){

        movie.daIzlizatLi=false;
        var trailer = movie.getElementsByClassName('trailer')[0];
        var podrobno = movie.getElementsByClassName('podrobno')[0];
        var liubimi = movie.getElementsByClassName('liubimi')[0];
        reMoveOneByOne(trailer);
        reMoveOneByOne(podrobno);
        reMoveOneByOne(liubimi)
        movie.imaLi = false;
        function reMoveOneByOne(obj){
            var mop=-6.25;
            var objStop=parseInt(obj.style.top, 10);
            var id2 = setInterval(reStepByStep,1)

            function reStepByStep(){
                if(movie.daIzlizatLi===true){
                    clearInterval(id2)  
                    return; 
                }
                obj.style.top= objStop+'em';
                    objStop-=step;
                if(mop == objStop){
                    clearInterval(id2)  
                    return;                
                }
            }
        }
   }
   var movies = document.querySelectorAll('.afish');
   
movies.forEach(movie => movie.addEventListener('mouseover', ()=>{
    movie.daIzlizatLi=true;
        
        moveBoxes(movie);
    },false))
movies.forEach(movie => movie.addEventListener('mouseleave', ()=>{
    removeBoxes(movie)
},false))

})