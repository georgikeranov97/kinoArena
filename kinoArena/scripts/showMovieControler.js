



document.querySelectorAll('a').forEach(a=>a.addEventListener('click',function(event){
    event.preventDefault();
    var id = +a.getAttribute('id')  // vryshta string, za tova slagame + otpred
    // var id = a.id - atributa moje da go dostypim direktno taka, ako e frug atribut s drugo ime, trqbwa da izpolzwame getAttribute
    var user = users.find(u=>u.id===id)
    var templateString = document.getElementById('home_page').innerHTML

    var template = Handlebars.compile(templateString)
    var html=template(user)

    document.getElementsByTagName('main')[0].innerHTML=html;
}))