//kogato nqkoi e lognat tova shte e currentUser
var currentUser = null

var numberTicket = 4000;
const TICKETS_PRICE = 12;
class Ticket {
  constructor(row, numberSeat) {
    // this.number=number;
    this.price = TICKETS_PRICE;
    // this.movieTitle=movieTitle;
    this.row = row;
    this.numberSeat = numberSeat;
    this.owner = null
    this.numberTicket = ++numberTicket;
  }
}

var allTicketets = [];
/// pri chekvane vednaga da pokaje kolko broq butona sa cheknati - kolko bileta sa izbrani
function updateTextArea() {
  var allVals = 0;
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
  var containerSeats = $('#zakupuvane');
  var input = $(this);
  var sedalka = $(input).attr('name');
  console.log(sedalka)
  var red = input.closest('div').attr('id');
  console.log(red)

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


    var p = document.createElement('p')
    p.id = `${newTicket.numberTicket}`;
    p.innerHTML = `Ред: ${red} , място :${sedalka}`
   
    document.getElementById('zakupuvane').appendChild(p)

  }
  broi = allTicketets.length;
  suma = broi * TICKETS_PRICE;
  $('#suma').text('Обща дължима сума:' + suma);
  
  var button = $('#suma');
  button.addEventListener('click',(event)=>{
    event.preventDefault();
    var newTicket = new Ticket(red, sedalka);
    allTicketets.push(newTicket)
    
  })
  
})


