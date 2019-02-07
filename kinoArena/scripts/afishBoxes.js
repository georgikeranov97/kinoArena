

var vkaraiTuk2 = $('#vkaraiTuk2')[0]
console.log(vkaraiTuk2)
var vkaraiTuk = $('#vkaraiTuk')[0]
var id = 0;
class Afish{
    constructor(title,poster,bgLanguage,restrictions,trailerLink,moreLink,isForKids){
        this.title = title;
        this.poster = poster;
        this.bgLanguage = bgLanguage;
        this.restrictions = restrictions;
        this.trailerLink = trailerLink;
        this.moreLink = moreLink;
        this.id= ++id;
        // this.imaLi = false; 
        // this.daIzlizatLi=true;
        this.isForKids = isForKids;
        
    }
    //teglim informaciqta i ot informaciqta, za wseki film - napravi now Afish
    showInDOM(){
       
       return `
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
            <div class="cutText">
                <h3>${this.title}</h3>
            </div>
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
        // vkaraiTuk.appendChild(div)
        
    }
    showInDOMSmall(){
        this.isItBig=false;
        var div = document.createElement('div')
        div.innerHTML=`
        <div class="afish2">
            <div class="InnerAfish2" id=${this.id}>
                <a href="${this.trailerLink}" class="trailer2">
                    <span>
                        <i class="fas fa-play-circle"></i>
                        <p>ТРЕЙЛЪР</p>
                    </span>
                </a>
                <a href="${this.moreLink}"  class="podrobno2"> 
                    <span>
                        <i class="fas fa-star2"></i>
                    <p>ПОДРОБНО</p>
                    </span>
                </a>
                <a href="#"  class="liubimi2">
                    <span>
                        <i class="fas fa-heart2"></i>
                        <p>ДОБАВИ В ЛЮБИМИ</p>
                    </span>
                </a>
                <img  src="${this.poster}">
            </div>
            <div class="cutText2">
                <h5>${this.title}</h5>
            </div>
            <div class="infoZaFilma2">
                <div class="stars2">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
                <div class="LanguageAge2"><img src="${this.bgLanguage}" alt=""></div>
                <div class="LanguageAge2"><img src="${this.restrictions}" alt=""></div>
            </div>
        </div>`
        vkaraiTuk2.appendChild(div)
    }
}
var lion = new Afish('Car Luv','assets/images/lionKing.jpg','assets/images/bezOgranichenq.png','assets/images/Dubliran.png','#',"#",true)
var dragon = new Afish('How to train dragon','assets/images/poster_1.jpg','assets/images/bezOgranichenq.png','assets/images/Dubliran.png','#','#',false)
var despicable = new Afish('Despicable me 3','assets/images/poster_2.jpg','assets/images/bezOgranichenq.png','assets/images/Dubliran.png','#','#',true)
var beauty = new Afish('Beauty and the Beast','assets/images/poster_3.jpg','assets/images/bezOgranichenq.png','assets/images/Dubliran.png','#','#',false)
var queen =new Afish('БОХЕМСКА РАПСОДИЯ','assets/images/queen.jpg','assets/images/bezOgranichenq.png','','#','#',false)
var allMovies = [lion,dragon,despicable,beauty,queen]
allMovies.forEach(movie=>{
    var div = document.createElement('div')
    console.log(movie.title)
    div.innerHTML=  movie.showInDOM()

vkaraiTuk.appendChild(div)
}

)
// a.appendTo($('#vkaraiTuk'))
// allMovies.forEach(film=>{
//     let divNew=film.showInDOM()
//     console.log(divNew)
//     $(vkaraiTuk).append
//     // vkaraiTuk.appendChild(divNew)

// })
// for(var index=0; index<allMovies.length; index++){
//     console.log('tuk izobshto stava li neshto?')
//     let divNew=allMovies[index].showInDOM()
//     console.log(divNew)
//     vkaraiTuk.appendChild(divNew)
// }
// beauty.showInDOMSmall()
// dragon.showInDOMSmall()
// lion.showInDOMSmall()
// despicable.showInDOMSmall()
// beauty.showInDOMSmall()
// dragon.showInDOMSmall()

// beauty.showInDOM()
// dragon.showInDOM()
// lion.showInDOM()
// despicable.showInDOM()
// beauty.showInDOM()
// dragon.showInDOM()




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









////sega za malkiq, che se chupi, ako gi obedinq

var trailerStop = 0;
var podrobnoStop2 = 3.75;
var liubimiStop2=7.5;
var step2 = 0.0625;
           

            
     var moveBoxes2= function moveBoxes2(movie){
    if(movie.imaLi===true){return}
    movie.imaLi=true;
    var trailer = movie.getElementsByClassName('trailer2')[0];
    var podrobno = movie.getElementsByClassName('podrobno2')[0];
    var liubimi = movie.getElementsByClassName('liubimi2')[0];
    moveOneByOne2(trailer,trailerStop);
    moveOneByOne2(podrobno,podrobnoStop2);
    moveOneByOne2(liubimi,liubimiStop2)

    function moveOneByOne2(obj,objStop){ 
        var direction='down'
        var mop=-3.75;
 
    var id2 = setInterval(stepByStep2,1)
        function stepByStep2(){ 
            if(movie.daIzlizatLi === false){
                movie.imaLi=false;
                clearInterval(id2);
                return;
            }
            if (direction==='down'){
                mop+=step2;
            }
            if( direction==='up'){
                if(mop==objStop){
                     clearInterval(id2) 
                     return;
                } 
                mop-=step2
            }
            if(mop == (objStop +2.25)){
                direction = 'up'                    
            }
            obj.style.top= mop+'em';
        }           
   }      
}

   var removeBoxes2= function removeBoxes2(movie){

        movie.daIzlizatLi=false;
        var trailer = movie.getElementsByClassName('trailer2')[0];
        var podrobno = movie.getElementsByClassName('podrobno2')[0];
        var liubimi = movie.getElementsByClassName('liubimi2')[0];
        reMoveOneByOne2(trailer);
        reMoveOneByOne2(podrobno);
        reMoveOneByOne2(liubimi)
        movie.imaLi = false;
        function reMoveOneByOne2(obj){
            var mop=-3.75;
            var objStop=parseInt(obj.style.top, 10);
            var id2 = setInterval(reStepByStep2,1)

            function reStepByStep2(){
                if(movie.daIzlizatLi===true){
                    clearInterval(id2)  
                    return; 
                }
                obj.style.top= objStop+'em';
                    objStop-=step2;
                if(mop == objStop){
                    clearInterval(id2)  
                    return;                
                }
            }
        }
   }
   var movies2 = document.querySelectorAll('.afish2');
   
movies2.forEach(movie => movie.addEventListener('mouseover', ()=>{
    movie.daIzlizatLi=true;
        
        moveBoxes2(movie);
    },false))
movies2.forEach(movie => movie.addEventListener('mouseleave', ()=>{
    removeBoxes2(movie)
},false))


// function appearAllMovies(){
//     console.log('vikna me')
//     allMovies.forEach(movie=>movie.showInDOM())
//  }
// function apperarKidsMovies(){
//     var forKids = allMovies.filter(movie => movie.isForKids===true)
//     forKids.forEach(movie=>movie.showInDOM())
// }