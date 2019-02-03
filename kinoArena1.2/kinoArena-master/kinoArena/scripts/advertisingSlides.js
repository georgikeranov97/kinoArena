
    var radio1 = document.querySelector('#radioOne')
    var radio2 = document.querySelector('#radioTwo')
    var radio3 = document.getElementById('radioThree')
   
    var radio4 = document.querySelector('#radioOne2')
    var radio5 = document.querySelector('#radioTwo2')
    var radio6 = document.getElementById('radioThree2')

    var radio7 = document.querySelector('#radioOne3')
    var radio8 = document.querySelector('#radioTwo3')
   
var reklamenPanel1=document.querySelector('#reklamenPanel1')
    var reklami = document.querySelectorAll('#reklamenPanel1 div')
    //za da vzema div-ovete sys slajdovete reklami[2] , [5] - towa sa porednite nomera na div-ovete v reklamniq panel
    var reklama1 = reklami[2]
    var reklama2 = reklami[5]
    var reklama3 = reklami[8]
var reklamenPanel2=document.querySelector('#reklamenPanel2')
    var reklami2 = document.querySelectorAll('#reklamenPanel2 div')
    var reklama4 = reklami2[2]
    var reklama5 = reklami2[5]
    var reklama6 = reklami2[8]
var reklamenPanel3=document.querySelector('#reklamenPanel3')
    var reklami3 = document.querySelectorAll('#reklamenPanel3 div')
    var reklama7 = reklami3[2]
    var reklama8 = reklami3[5]

    function checkIfImaLiStop(){
        if(imaLi===true){
            imaLi=false;
            clearInterval(id)
        }  
    }
    radio1.addEventListener('click',()=>{
        // if(imaLi===true){
        //     imaLi=false;
        //     clearInterval(id)
        // }  
        checkIfImaLiStop()
        moveSlide()
    },false)
 
    radio2.addEventListener('click',()=>{
        checkIfImaLiStop()
        moveSlide()
    },false)
    radio3.addEventListener('click',()=>{
        checkIfImaLiStop()
        moveSlide()
    },false)
    

    radio4.addEventListener('click',()=>{
        checkIfImaLiStop()
        moveSlide2()
    },false)
    radio5.addEventListener('click',()=>{
        checkIfImaLiStop()
        moveSlide2()
    },false)
    radio6.addEventListener('click',()=>{
        checkIfImaLiStop()
        moveSlide2()
    },false)


    radio7.addEventListener('click',()=>{
        checkIfImaLiStop()
        moveSlide3()
    },false)
    radio8.addEventListener('click',()=>{
        checkIfImaLiStop()
        moveSlide3()
    },false)


var left1=0;
var left2=0;
var left3=0;
// ako ima zadejstvano veche dvijenie da ne dava da se pusne novo
var imaLi = false
var id;


    function moveSlide(){ 
        if (imaLi===true){
            return
        }
        imaLi=true;
        var left1Poziciq; 
        //ako e izbran pyrviq buton poziciqta na 1 slaid trqbva da e 0
        if (radio1.checked){
            left1Poziciq=0;
        }
        //ako e izbran pyrviq buton poziciqta na 1 slaid trqbva da e -358
        if (radio2.checked){
            left1Poziciq=-358
        }
        //ako e izbran tretiq buton, 1 slaid trqbva da se premesti do -716
        if (radio3.checked){
            left1Poziciq=-716
        }
        //ako poziciqta v momenta syvpada s izbraniq buton da ne pravi nishto
        if(left1Poziciq == left1 ){
                return
            }
        if(left1Poziciq<left1){
        // ako sme izbrali po-zaden slaid, da izvika funkciqta, koqto shte pokaje po-nachalen slaid
            id=setInterval(StepByStepMinus);
        }
        if(left1Poziciq>left1){
            id=setInterval(StepByStepPlus);
        }
        function StepByStepMinus(){
            left1--;
            reklama1.style.left = left1 + 'px'
            reklama2.style.left = left1 + 'px'
            reklama3.style.left = left1 + 'px'
            if(left1<=left1Poziciq ){    
                clearInterval(id);
                imaLi=false;
                return;
            }  
        }
        function StepByStepPlus(){
            left1++;
            reklama1.style.left = left1 + 'px'
            reklama2.style.left = left1 + 'px'
            reklama3.style.left = left1 + 'px'
            
            if(left1>=left1Poziciq){    
                clearInterval(id)
                 imaLi=false;
                return;
            }
        }
    }


    
    function moveSlide2(){ 
        if (imaLi===true){
            return
        }
        imaLi=true;
        var left1Poziciq; 
        if (radio4.checked){
            left1Poziciq=0;
        }
        if (radio5.checked){
            left1Poziciq=-358
        }
        if (radio6.checked){
            left1Poziciq=-716
        }
        if(left1Poziciq == left2 ){
                return
            }
        if(left1Poziciq<left2){
            id=setInterval(StepByStepMinus2);
        }
        if(left1Poziciq>left2){
            id=setInterval(StepByStepPlus2);
        }
        function StepByStepMinus2(){
            left2--;
            reklama4.style.left = left2 + 'px'
            reklama5.style.left = left2 + 'px'
            reklama6.style.left = left2 + 'px'
            if(left2<=left1Poziciq ){   
                clearInterval(id);
                imaLi=false; 
                return;
            }    
        }
        function StepByStepPlus2(){
            left2++;

            reklama4.style.left = left2 + 'px'
            reklama5.style.left = left2 + 'px'
            reklama6.style.left = left2 + 'px'
            if(left2>=left1Poziciq){    
                clearInterval(id)
                imaLi=false;
                return;
            }
        }
    }



    function moveSlide3(){ 
        if (imaLi===true){
            return
        }
        imaLi=true;
        var left1Poziciq; 
        
        if (radio7.checked){
            left1Poziciq=0;
        }
        if (radio8.checked){
            left1Poziciq=-358
        }
        if(left1Poziciq == left3 ){
                return
            }
        if(left1Poziciq<left3){
            id=setInterval(StepByStepMinus3);
        }
        if(left1Poziciq>left3){
            id=setInterval(StepByStepPlus3);
        }
        function StepByStepMinus3(){
            left3--;
            reklama7.style.left = left3 + 'px'
            reklama8.style.left = left3 + 'px'
            if(left3<=left1Poziciq ){
                imaLi=false;    
                clearInterval(id);
                return;
            }    
        }
        function StepByStepPlus3(){
            left3++;

            reklama7.style.left = left3 + 'px'
            reklama8.style.left = left3 + 'px'
            if(left3>=left1Poziciq){    
                clearInterval(id)
                imaLi=false; 
                return;
            }
        }
    }


  