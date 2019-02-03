var nacho1 = document.getElementById('nacho1')
var popcorn1 = document.getElementById('popcorn1')
var popcorn2 = document.getElementById('popcorn2')
var popcorn3 = document.getElementById('popcorn3')
var popcorn4 = document.getElementById('popcorn4')

nacho1.style.top= 208+'px';
popcorn1.style.top = 81 + 'px';
popcorn2.style.top = 300 + 'px';
popcorn3.style.top = 392 +'px';
popcorn4.style.top = 464 + 'px';

var flyingElements = [nacho1, popcorn1, popcorn2, popcorn3, popcorn4]
//window.pageYOffset dava chislo pri scroll ot 0 do kraq na scroll-a
//zapazvame si v lastNum, koe e bilo chisloto i sravnqvame s novoto num
//ako staroto chislo, e po-golqmo, znachi se scroll-va nagore
var lastNum=0;

var id;

var imaLi=false;
var count=0;
window.addEventListener('scroll',()=>{
    if(imaLi){return}
    imaLi=true;
    let num=window.pageYOffset
    if (num>lastNum ){
        id=setInterval(moveDown,3)
    }else{
       id=setInterval(moveUp,3)
    }
    lastNum=num;
})
function moveDown(){
    flyingElements.forEach(function (el){
        var mop=parseInt(el.style.top,10) 
        mop++;
        
        el.style.top= mop+ 'px'
        el.style.transform = 'rotate('+mop+'deg)';
    })
    count++;
    if(count>=30){
        count=0;
        imaLi=false;
        clearInterval(id)
    }
}
   
function moveUp(){
    flyingElements.forEach(el =>{
        var mop=parseInt(el.style.top,10)
        mop--;
        el.style.top= mop+ 'px'
        el.style.transform = 'rotate('+mop+'deg)';
    })
    count++;
    if(count>=30){
        count=0;
        imaLi=false;
        clearInterval(id)
    }
}
