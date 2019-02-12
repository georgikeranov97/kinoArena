
  var allTicketets = [];
  var newTicket;
  var currentUser = userStorage.getCurrentUser()
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
