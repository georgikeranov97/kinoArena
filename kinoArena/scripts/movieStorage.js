var id = 0;

class Afish{
    constructor(title,poster,bgLanguage,restrictions,trailerLink,moreLink,isForKids,isImax, isPremium, isLuxe,isVip,isConcert,kina){
        this.title = title;
        this.poster = poster;
        this.bgLanguage = bgLanguage;
        if (restrictions )
        this.restrictions = restrictions;
        this.trailerLink = trailerLink;
    this.moreLink = moreLink;
    this.id= ++id;
    this.isForKids = isForKids;
    this.isImax=isImax;
    this.isPremium=isPremium;
    this.isLuxe=isLuxe;
    this.isVip=isVip;
    this.isConcert=isConcert;
    this.kina=kina;
    }
 
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
                <a id="${this.id}" href="#page=details/${this.id}"  class="podrobno"> 
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
       return `
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
    }
}

var chasove1 = [
    [kina[0].name, '16:30','18:30','20:00','21:30'],
    [kina[1].name, '10:30','12:00','14:00','18:30'],
    [kina[2].name, '11:30','12:10','17:00','22:30'],
]
var chasove2 = [
    [kina[0].name, '12:30','14:30','20:00','23:30'],
    [kina[1].name, '10:30','13:00','15:00','18:30'],
    [kina[2].name, '13:30','12:30','14:00','21:30'],
]

var lion = new Afish('Car Luv','assets/images/lionKing.jpg','assets/images/bezOgranichenq.png','assets/images/Dubliran.png','#',"#",true,true,false,false,true,chasove1)
var dragon = new Afish('How to train dragon','assets/images/poster_1.jpg','assets/images/bezOgranichenq.png','assets/images/Dubliran.png','#','#',false,true,true,true,false,chasove1)
var despicable = new Afish('Despicable me 3','assets/images/poster_2.jpg','assets/images/bezOgranichenq.png','assets/images/Dubliran.png','#','#',true,false,true,true,true,chasove2)
var beauty = new Afish('Beauty and the Beast','assets/images/poster_3.jpg','assets/images/bezOgranichenq.png','assets/images/Dubliran.png','#','#',false,true,true,false,false,chasove2)
var queen =new Afish('БОХЕМСКА РАПСОДИЯ','assets/images/queen.jpg','assets/images/bezOgranichenq.png','','#','#',false,true,true,false,false,chasove1)




var allMovies = [lion,dragon,despicable,beauty,queen]

