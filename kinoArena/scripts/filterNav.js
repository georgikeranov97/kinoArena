
var vsichki = document.querySelectorAll('.filter');
console.log(vsichki)
Array.prototype.forEach.call(vsichki, vsqko =>{
    
    vsqko.addEventListener('click',function(){
            // $('.filter').children('div').css('border-bottom','none')
            $('.filter').children('p').css('color',' #eee')
        $('tr').children('th').css('border-bottom','none')
        $(this).css('border-bottom','5px solid red')
        $(this).children('p').css('color','red')
        apperarKidsMovies();
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


