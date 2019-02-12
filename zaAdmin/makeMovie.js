var id = 0;
class Afish{
    constructor(title,poster,bgLanguage,restrictions,trailerLink,moreLink,isForKids,isImax, isPremium, isLuxe,isVip,isConcert,kina){
        this.title = title;
        this.poster = poster;
        this.bgLanguage = bgLanguage;
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
    // addKino(kino,projekcii){
    //     const zaTovaKino = new Array()
    //     zaTovaKino.push(kino.name)
    //     projekcii.forEach(p=> zaTovaKino.push(p));
    //     this.kina.push(zaTovaKino);
    //     // this.kina.set(kino,projekcii)
    //     // projekcii.forEach(projekcia => function(){this.kina.set(kino,projekcia)})
    // }
    
}
class Cinema{
    constructor(name){
        this.name=name;
      
        
    }
}

var arenaMladost = new Cinema('Arena Mladost')
var arenaZapad = new Cinema('arena Zapad')
var arenaStaraZagora = new Cinema('arena Stara Zagora')
beauty=new Afish('fdfds','fsfd','fds','fds','fdfsd','fdsfds','f','f','fd','fd','fd')
var projekcii1=['11:30','14:30','16:00']   
var projekcii2=['15:30','18:30','20:00','23:00']     
// beauty.addKino(arenaMladost,projekcii1);  
// beauty.addKino(arenaStaraZagora,projekcii2);    
// console.log(beauty.kina)

var allMovies = []
var button = document.getElementsByTagName('button')[0]
button.addEventListener('click',event=>{
    event.preventDefault()
    const kinaVkoitoShteGoIma = [];
    const title = $('#filmTitle').val()
    // console.log('ime '+title)
    const poster = $('#picture').val()
    const bGaudio = $('input[name=audio]:checked').val()
    // console.log('BG audio : '+bGaudio)
    const restrictions = $('input[name=restrictions]:checked').val()
    // console.log('ogranichenie: '+ restrictions)
    const trailerLink = $('#trailerLocation').val()
    // console.log(trailerLink);
    const moreLink= $('povecheZaFilma').val();
    // console.log(moreLink)
    var isForKids=false;
    if( $('input[name=forKids]').is(':checked')){
        isForKids=true
    }
    // console.log('za deca '+isForKids)
    var imax = false;
    if( $('input[name=IMAX]').is(':checked')){
        imax=true;
    }
    // console.log('imax'+imax);
    var premium = false;
    if( $('input[name=Premium]').is(':checked')){
        premium=true;
    }
    // console.log('premium'+ premium);
    var luxe = false;
    if( $('input[name=LUXE]').is(':checked')){
        luxe=true;
    }
    // console.log('luks'+ luxe)
    var vip = false;
    if( $('input[name=VIP]').is(':checked')){
        vip=true;
    }
    // console.log('vip'+ vip)
    var concert = false;
    if( $('input[name=concert]').is(':checked')){
        concert=false;
    }
    // console.log('koncert' + concert)

    if( $('input[name=zaMladost]').is(':checked')){
        let selected = [];
        selected.push(arenaMladost.name)        
        $('#zaMladost input:checked').each(function() {
            selected.push($(this).val());
        });
    kinaVkoitoShteGoIma.push(selected)
    }
    if( $('input[name=zaZapad]').is(':checked')){
        let selected = [];
        selected.push(arenaZapad.name)    
        $('#zaZapad input:checked').each(function() {
            selected.push($(this).val());
        });
    kinaVkoitoShteGoIma.push(selected) 
    }
    if( $('input[name=zaStaraZagora]').is(':checked')){
        let selected = [];
        selected.push(arenaStaraZagora.name)    
        $('#zaStaraZagora input:checked').each(function() {
            selected.push($(this).val());
        });
    kinaVkoitoShteGoIma.push(selected) 
    }
    // console.log(kinaVkoitoShteGoIma)

    var movie=new Afish(title,poster,bGaudio,restrictions,trailerLink,moreLink,isForKids,imax,premium,luxe,vip,concert,kinaVkoitoShteGoIma)
   allMovies.push(movie)
   console.log(movie)


})
