var izvikaiFilterNav = function() {

var vsichki = document.querySelectorAll('.filter');
Array.prototype.forEach.call(vsichki, vsqko =>{
    
    vsqko.addEventListener('click',function(){
            // $('.filter').children('div').css('border-bottom','none')
            $('.filter').children('p').css('color',' #eee')
        $('tr').children('th').css('border-bottom','none')
        $(this).css('border-bottom','5px solid red')
        $(this).children('p').css('color','red')
    },false)
})

var strelka1  = $('.arrow')[0]
var strelka2  = $('.arrow')[1]
var tableNav = $('#tableNav')[0]
tableNav.style.left="0em"
console.log(strelka1)
console.log(strelka2)
const STEP_MOOVE_NAV=0.0625;

strelka1.addEventListener('click',function(){
    // console.log('vliza be!')
    var left = parseInt(tableNav.style.left, 10)
    // console.log(left)
    if(left <= 0){
        var id = setInterval(move,1)
        strelka1.style.visibility='hidden'
        strelka2.style.visibility='visible'
        function move(){
            left+=STEP_MOOVE_NAV;
            tableNav.style.left= left+'em';
            if (left>=0){
                clearInterval(id)
            }
        }   
    }
})
strelka2.addEventListener('click',function(){
    var left = parseInt(tableNav.style.left, 10)
    console.log(left)
    if(left>=0){
        strelka2.style.visibility='hidden'
        strelka1.style.visibility='visible'
        id=setInterval(move,1)
        function move(){
            left-=STEP_MOOVE_NAV;
            tableNav.style.left= left+'em';
            if (left<= -8){
                clearInterval(id)
            }
        }   
    }
})
// var malkiLisa=false;
// document.getElementById('malki').addEventListener('click',()=>{
//     malkiLisa=true;
//     console.log(malkiLisa)
// })

// function pokaji(elementZaPOkazvane){
//     $('.checkedMovies').fadeOut().css('display','none')
//     elementZaPOkazvane.fadeIn().css('display','flex')
// }
function pokaji(elementZaPOkazvane){
    $('.checkedMovies').css('display','none')
    elementZaPOkazvane.css('display','flex')
}


// console.log(malkiLisa)
vsichki[0].addEventListener('click',()=>{
    // if(malkiLisa){
    // pokaji($('#allMovies'))
    // }else{
        pokaji($('#allMoviesSmall'))
    // }
})
vsichki[1].addEventListener('click',()=>{
    // if(malkiLisa===true){   
    pokaji($('#forKids'))
    // }else{
    //     pokaji($('#forKidsSmall')) 
    // }
   
})
vsichki[2].addEventListener('click',()=>{
    pokaji($('#imax'))
})
vsichki[3].addEventListener('click',()=>{
    pokaji($('#premium'))
}) 
vsichki[4].addEventListener('click',()=>{
    pokaji($('#luxe'))
}) 
vsichki[5].addEventListener('click',()=>{
    pokaji($('#vip'))
}) 


}