// window.addEventListener('DOMContentLoaded', function () {

//     document.querySelector("#newRegister > button").addEventListener('click', function (event) {
//         event.preventDefault();
//         document.querySelector('.justRegister').style.display = 'block';
//         document.querySelector('.justLogin').style.display = 'none';
//     });

//     document.querySelector('.enterButton > button').addEventListener('click', function(event) {
//         event.preventDefault();

//         const email = document.getElementById("email").value;
//         const password = document.getElementById('password').value;

//         if(userStorage.login(email, password)) {
//             document.querySelector('.justLogin').style.display = 'none';
//         }else{
//             document.querySelector("#email").style.borderColor = 'rgb(185, 9, 9)';
//             document.querySelector('#password').style.borderColor = 'rgb(185, 9, 9)';
//         }

//     }, false);

//     document.querySelector('.registerButton > button').addEventListener('click', function(event) {
//         event.preventDefault();

//         const firstName = document.getElementById('firstname').value;
//         const lastName = document.getElementById('lastname').value;
//         const email = document.getElementById('email2').value;
//         const password = document.getElementById('password2').value;
//         const repeatPassword = document.getElementById('repeatpassword').value;
//         let hasErrors = false;

//         if(firstName.trim().length < 3){
//             document.querySelector('.firstNameContainer > .error').innerText = 'Invalid firstname!';
//             hasErrors = true;
//         }else{
//             document.querySelector('.firstNameContainer > .error').innerText = '';
//         }
//         if(lastName.trim().length < 4){
//             document.querySelector('.lastNameContainer > .error').innerText = 'Invalid lastname!';
//             hasErrors = true;
//         }else{
//             document.querySelector('.lastNameContainer > .error').innerText = '';
//         }
//         if(!isEmailValid(email)){
//             document.querySelector('.emailContainer > .error').innerText = 'Invalid email!';
//             hasErrors = true;
//         }else{
//             document.querySelector('.emailContainer > .error').innerText = '';
//         }
//         if(password.trim().length < 6){
//             document.querySelector('.passwordContainer > .error').innerText = 'Invalid password!';
//             hasErrors = true;
//         }else{
//             document.querySelector('.passwordContainer > .error').innerText = '';
//         }
//         if(repeatPassword !== password){
//             document.querySelector('.repeatPasswordContainer > .error').innerText = 'Invalid repeated password!';
//             hasErrors = true;
//         }else{
//             document.querySelector('.repeatPasswordContainer > .error').innerText = '';
//         }

//         if(!hasErrors) {
//             userStorage.register(firstName, lastName, email, password);
//             document.querySelector('.justLogin').style.display = 'block';
//             document.querySelector('.justRegister').style.display = '';
//         }
//     });

// });

// function isEmailValid(email) {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }
// function userController() {
//     $.get('login.htm').then(text => {
//         $('main').html(text);
//     })
// }
function userController() {
    $('#loginFormButton').on('click', function () {
        $.get('login.htm').then(text => {
            $('main').html(text);

            $('.enterButton > button').on('click', function (event) {
                event.preventDefault();

                const email = $('#email').val();
                const password = $('#password').val();

                if (userStorage.login(email, password)) {
                    $('.justLogin').css('display', 'none');
                } else {
                    $('#email').css('border-color', 'rgb(185, 9, 9)');
                    $('#password').css('border-color', 'rgb(185, 9, 9)');
                }
            });
        });
    });
}

