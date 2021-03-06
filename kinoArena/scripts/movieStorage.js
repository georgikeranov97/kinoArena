
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
                <a  href="#page=details/${this.id}" class="trailer popup">
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
                <a  href="#page=details/${this.id}" id="liubimi" class="liubimi">
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
                <a  href="#page=details/${this.id}" class="trailer2">
                    <span>
                        <i class="fas fa-play-circle"></i>
                        <p>ТРЕЙЛЪР</p>
                    </span>
                </a>
                <a id="${this.id}" href="#page=details/${this.id}"   class="podrobno2"> 
                    <span>
                        <i class="fas fa-star2"></i>
                    <p>ПОДРОБНО</p>
                    </span>
                </a>
                <a  href="#page=details/${this.id}"  class="liubimi2">
                    <span>
                        <i width="5px"class="fas fa-heart2"></i>
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
var lk='Cимбa e млaдия нacлeдниĸ нa пpecтoлa, нo e тpън в oчитe нa aлчния cи чичo, ĸoйтo иcĸa дa cтaнe цap нa caвaнaтa. Cлeдвaт пopeдицa oт интpиги, c ĸoитo тoй ce дoĸoпвa дo пpecтoлa, a мaлĸoтo лъвчe ce пpинyждaвa дa нaпycнe poдинaтa cи. Toй cpeщa нoви пpиятeли, c ĸoитo пopacтвa и мy пoĸaзвaт ĸoй вcъщнocт e тoй - в poдинaтa cи имa дълг.'
var d ='Невероятното приятелство, започнало между един подрастващ викинг и страховития дракон Нощен бяс, се превъръща в епична трилогия, завладяла живота и на двамата. В този епизод Хълцук и Беззъб най-накрая ще открият истинските си съдби: вождът на селото като владетел на Бърк заедно с Астрид и драконът – като лидер на своя вид. Борейки се с ежедневните предизвикателства, те се изправят пред най-тъмната заплаха, с която са се сблъсквали до сега. Тя, както и появата на женската Нощен бяс, ще поставят на изпитание връзката помежду им както никога досега.'
var k ="Всеки знае приказката Красавицата и звяра, но въпреки това всеки един нов филм, базиран на тази приказки, изглежда все по-трогателен. Още повече на фона на днешното кино, в което на преден план са екшън сцените, сред които сюжета се загубва, то при Красавицата и звяра сюжета е допълнен с красивите сцени на Дисни. "
var q ="Бохемска рапсодия“ е биографичен филм за британската рок звезда Фреди Мъркюри и групата Куийн, който през 2019 г. печели награда „Златен глобус“ за най-добър филм в категорията драма, а Рами Малек печели „Златен глобус“ за най-добра мъжка роля. Филмът проследява живота на певеца от 1970 г. до 1985 г., от създаването на Куийн до концерта Live Aid на Уембли. "
var m ='Гру е световен злодей №2, но плановете му винаги са осуетявани от световния злодей №1 – Вектор.Докато се крие тайно в предградията, Гру живее с идиотски малки същества, приличащи на генетично преправени пуканки, наети от него да откраднат Хеопсовата Пирамида, но това не е всичко.'
var lion = new Afish('Car Luv','assets/images/lionKing.jpg','assets/images/bezOgranichenq.png','assets/images/Dubliran.png','https://www.youtube.com/embed/4CbLXeGSDxg',lk,true,true,false,false,true,chasove1)
var dragon = new Afish('How to train dragon','assets/images/poster_1.jpg','assets/images/bezOgranichenq.png','assets/images/Dubliran.png','https://www.youtube.com/embed/CQ7XUCQ6pbE',d,false,true,true,true,false,chasove1)
var despicable = new Afish('Despicable me 3','assets/images/poster_2.jpg','assets/images/bezOgranichenq.png','assets/images/Dubliran.png','https://www.youtube.com/embed/sUkZFetWYY0',m,true,false,true,true,true,chasove2)
var beauty = new Afish('Beauty and the Beast','assets/images/poster_3.jpg','assets/images/bezOgranichenq.png','assets/images/Dubliran.png','https://www.youtube.com/embed/e3Nl_TCQXuw',k,false,true,true,false,false,chasove2)
var queen =new Afish('БОХЕМСКА РАПСОДИЯ','assets/images/queen.jpg','assets/images/bezOgranichenq.png','','https://www.youtube.com/embed/mP0VHJYFOAU',q,false,true,true,false,false,chasove1)




var allMovies = [lion,dragon,despicable,beauty,queen]

function getMovieByName(movieTitle) {
    return allMovies.find(movie => movie.title === movieTitle);
}

