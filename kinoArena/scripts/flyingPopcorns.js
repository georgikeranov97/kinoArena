document.addEventListener("DOMContentLoaded", function() {
    var nacho1 = document.getElementById('nacho1')
    var nacho2 = document.getElementById('nacho2')
    var popcorn1 = document.getElementById('popcorn1')
    var popcorn2 = document.getElementById('popcorn2')
    var popcorn3 = document.getElementById('popcorn3')
    var popcorn4 = document.getElementById('popcorn4')
    var popcorn5 = document.getElementById('popcorn5')
    var popcorn6 = document.getElementById('popcorn6')
    var flyingStars = document.getElementById('starSky')
    
    nacho1.style.top= 767+'px';
    nacho2.style.top= 887+'px';
    popcorn1.style.top = 833 + 'px';
    popcorn2.style.top = 1000 + 'px';
    popcorn3.style.top = 1000 +'px';
    popcorn4.style.top = 691 + 'px';
    popcorn5.style.top = 1059 + 'px';
    popcorn6.style.top = 1128 + 'px';
    flyingStars.style.top = 300 + 'px'
    
    var flyingElements = [nacho1, nacho2, popcorn1, popcorn2, popcorn3, popcorn4, popcorn5, popcorn6]
    
   
    window.addEventListener('scroll',()=>{
        if(imaLi){return}
        imaLi=true;
        let num=window.pageYOffset;
        if (num>lastNum ){
            id=setInterval(()=>moveDown(flyingElements),30)
            id2=setInterval(()=>moveSkyUp(flyingStars),30)
    
        }else{
           id=setInterval(()=>moveUp(flyingElements),30)
           id2=setInterval(()=>moveSkyDown(flyingStars),30)
        }
        lastNum=num;
      
    })
    

})
 //window.pageYOffset dava chislo pri scroll ot 0 do kraq na scroll-a
    //zapazvame si v lastNum, koe e bilo chisloto i sravnqvame s novoto num
    //ako staroto chislo, e po-golqmo, znachi se scroll-va nagore
    var lastNum=0;
    
    var id;
    var id2;
    var imaLi=false;
    var count=0;
function moveDown(flyingElements){
        
    flyingElements.forEach(function (el){
        var mop=parseInt(el.style.top,10) 
       mop++
        
        el.style.top= mop+ 'px'
        el.style.transform = 'rotate('+mop+'deg)';
    })
    count++;
    if(count>=40){
        count=0;
        imaLi=false;
        clearInterval(id)
    }
}
   
function moveUp(flyingElements){

    flyingElements.forEach(el =>{
        var mop=parseInt(el.style.top,10)
            mop--;
    
        el.style.top= mop+ 'px'
        el.style.transform = 'rotate('+mop+'deg)';
    })
    count++;
    if(count>=40){
        count=0;
        imaLi=false;
        clearInterval(id)
    }
}
function moveSkyUp(flyingStars){
    var mop=parseInt(flyingStars.style.top,10)
    mop--;
    flyingStars.style.top= mop +'px'
    if(count>=39){
        clearInterval(id2)
}
}
function moveSkyDown(flyingStars){
    var mop=parseInt(flyingStars.style.top,10)
    mop++;
    flyingStars.style.top= mop +'px'
    if(count>=39){
        clearInterval(id2)
}
}
