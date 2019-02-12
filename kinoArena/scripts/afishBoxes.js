// $('a').bind('click', function(event) {
//     event.preventDefault();
// });


var moveBoxes2
var removeBoxes2

var izvikaiKutiite = function(){

    // $(".popup").click(function () {
    //     var $this = $(this);
    //     var $iframe = $("<iframe>").attr("src", $this.data("link")).css({"width": 400, "height": 300});
    //     var $title = $("<h1>").text($this.data("title"));
    //     $("#video-view").html($title).append($iframe);
    //     $iframe.wrap("<div class='class-video'>");
    // });

    var forKidsDiv=document.getElementById('forKids')
    // var forKidsDiv2=document.getElementById('forKidsSmall')
    var forKidsarr=allMovies.filter(m=>m.isForKids===true);
    forKidsarr.forEach(m=>{
        const div = document.createElement('div')
        // const div2 = document.createElement('div')
        div.innerHTML = m.showInDOM()
        // div2.innerHTML = m.showInDOMSmall()
        forKidsDiv.appendChild(div)
        // forKidsDiv2.appendChild(div2)
    })

    var luxeDiv=document.getElementById('luxe');
    var luxeArr = allMovies.filter(m=>m.isLuxe===true);
    luxeArr.forEach(m=>{
        const div = document.createElement('div')
        div.innerHTML = m.showInDOM()
        luxeDiv.appendChild(div)
    })
    luxeDiv=document.getElementById('luxeSmall');
    luxeArr = allMovies.filter(m=>m.isLuxe===true);
    luxeArr.forEach(m=>{
        const div = document.createElement('div')
        div.innerHTML = m.showInDOMSmall()
        luxeDiv.appendChild(div)
    })


    var allMoviesInMain = document.getElementById('allMovies');
    allMovies.forEach(movie=>{
        var div = document.createElement('div')
        div.innerHTML=  movie.showInDOM()
        allMoviesInMain.appendChild(div)
    })
    var imaxMoviesDiv = document.getElementById('imax');
    var imaxMovies=allMovies.filter(m=>m.isImax===true);
    imaxMovies.forEach(m=>{
        var div = document.createElement('div')
        div.innerHTML=  m.showInDOM()
        imaxMoviesDiv.appendChild(div)
    })
    var premiumMoviesDiv = document.getElementById('premium');
    var premiumMovies = allMovies.filter(m=>m.isPremium===true);
    premiumMovies.forEach(m=>{
        var div = document.createElement('div')
        div.innerHTML=  m.showInDOM();
        premiumMoviesDiv.appendChild(div)
    })
    var vipMoviesDiv = document.getElementById('vip');
    var vipMovies = allMovies.filter(m=>m.isVip===true);
    vipMovies.forEach(m=>{
        var div = document.createElement('div')
        div.innerHTML=  m.showInDOM();
        vipMoviesDiv.appendChild(div)
    })





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








}
    ////sega za malkiq, che se chupi, ako gi obedinq

    var trailerStop = 0;
    var podrobnoStop2 = 3.75;
    var liubimiStop2=7.5;
    var step2 = 0.0625;



     moveBoxes2= function moveBoxes2(movie){
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

    removeBoxes2= function removeBoxes2(movie){

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






