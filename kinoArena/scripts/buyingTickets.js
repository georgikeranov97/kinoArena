
  var manageBuying=function(){
  // console.log('ama hich ne stava nishto!')
  var masivPage = location.hash.split("/");
  
  var idfilm = + masivPage[masivPage.length-1]
  
  var filmche = allMovies.find(m => m.id == idfilm);
  console.log(filmche.title)
  //kogato nqkoi e lognat tova shte e currentUser
  var currentUser = userStorage.getCurrentUser();
  
  
  // kina.forEach(k=>{
  //   $('<option>').val(k.name).appendTo($('#selectCinema')).text(k.name)
  // })
  // var selectetCinema
  // $('#selectCinema').on('change',function(){
  //   selectetCinema=$('#selectCinema').val()
  //   console.log('ти ебаваш ли се')
  // })
  
  // $('#zaToziFilm').text(filmche.title)
  
  var allTicketets = [];
  var newTicket;
  window.addEventListener("DOMContentLoaded", function(){
  (function(){
    document.getElementById('zaToziFilm').innerText=filmche.title


    /// pri chekvane vednaga da pokaje kolko broq butona sa cheknati - kolko bileta sa izbrani
    function updateTextArea() {
      console.log('влиза в ъпдейт текст ареа')
    
      var allVals = 0;
      console.log($('input[type="checkbox"]'))
      $('input[type="checkbox"]').each(function () {
     
        if (this.checked) {
          var v = $(this).val();
    
          allVals += +v
        }
      });
      $('#bileti').text('Избрахте ' + allVals + ' бр. билети');
    }
    // pri smqna na statusa na chek-box-a da pokaje kolko bileta sa izbrani
    $('input[type="checkbox"]').change(updateTextArea);
    // syshto pti smqna da pokaje na ekrana, mqstoto, koeto e izbrano
    $('input[type="checkbox"]').change(function () {
      updateTextArea()
      var input = $(this);
      var sedalka = $(input).attr('name');
    
      var red = input.closest('div').attr('id');
    
    
      //tyrsim dali ima veche vednyj natisnata, takava sedalka,zashtoto ako ima povtornoto natiskane e otkaz
      //  var choosenSeat = allTicketets.filter(t=> t.numberSeat===sedalka && t.row===red)
      var choosenSeat = allTicketets.findIndex(t => t.numberSeat === sedalka && t.row === red)
      // filtrirame za da namerim syshtiq tozi izbran elelement
      if (choosenSeat !== -1) {
        var forRemove = document.getElementById(`${allTicketets[choosenSeat].numberTicket}`)
        console.log(allTicketets)
        allTicketets.splice(choosenSeat, 1)
        console.log(allTicketets)
        forRemove.remove();
    
      } else {
        // pri izbor na  check box, shte pravi nov obekt bilet
        // pri povtorna promqna na check boksa, shte tyrsi v biletite i ako veche ima takyw - shte go iztrie ot ekrana
    
        newTicket = new Ticket(red, sedalka);
        var p = document.createElement('p')
        p.id = `${newTicket.numberTicket}`;
        p.innerHTML = `Ред: ${red} , място :${sedalka}`
       
        document.getElementById('zakupuvane').appendChild(p)
    
      }
      allTicketets.push(newTicket)
      broi = allTicketets.length;
      suma = broi * ticketsPrice;
      $('#suma').text('Обща дължима сума:' + suma+'лв');
    
      document.getElementsByTagName('button')[0].addEventListener('click',()=>{
        console.log(document.getElementById('buy'))
        if (!currentUser){
          location.replace('#page=login')
        }else{
          document.getElementById('buy').style.display="block"
          document.getElementById('zakupuvane').style.visibility="hidden"
          currentUser.buyTicket(allTicketets);
        }
             
        })
      
  })
  
  })()
})

}