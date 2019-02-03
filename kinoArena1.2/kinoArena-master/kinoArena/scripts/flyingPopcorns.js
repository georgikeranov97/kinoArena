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
var flag = false;
var id;
var startmop;
window.addEventListener('scroll',()=>{
    let num=window.pageYOffset
    if (num>lastNum ){
        flyingElements.forEach(e=> {

            moveDown(e)
        })
           }else{
        flyingElements.forEach(e=> {
            moveUp(e)
        }
        )}
    lastNum=num;
})
function moveDown(obj){
    var mop=parseInt(obj.style.top,10)
        mop++;
        obj.style.top= mop+ 'px'
        obj.style.transform = 'rotate('+mop+'deg)';
    }

   
function moveUp(obj){
    var mop=parseInt(obj.style.top,10)
        mop--;
        obj.style.top= mop+ 'px'
        obj.style.transform = 'rotate('+mop+'deg)';
  

}
