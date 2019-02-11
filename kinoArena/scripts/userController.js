// window.addEventListener('DOMContentLoaded', function () {

//     document.querySelector("#newRegister > button").addEventListener('click', function (event) {
//         event.preventDefault();
//         document.querySelector('.justRegister').style.display = 'block';
//         document.querySelector('.justLogin').style.display = 'none';
//     });

//     document.querySelector('.enterButton > button').addEventListener('click', function (event) {
//         event.preventDefault();

//         const email = document.getElementById("email").value;
//         const password = document.getElementById('password').value;

//         if (userStorage.login(email, password)) {
//             document.querySelector('.justLogin').style.display = 'none';
//         } else {
//             document.querySelector("#email").style.borderColor = 'rgb(185, 9, 9)';
//             document.querySelector('#password').style.borderColor = 'rgb(185, 9, 9)';
//         }

//     }, false);


// document.querySelector('.registerButton > button').addEventListener('click', function (event) {
//     event.preventDefault();

//     const firstName = document.getElementById('firstname').value;
//     const lastName = document.getElementById('lastname').value;
//     const email = document.getElementById('email2').value;
//     const password = document.getElementById('password2').value;
//     const repeatPassword = document.getElementById('repeatpassword').value;
//     let hasErrors = false;

//     if (firstName.trim().length < 3) {
//         document.querySelector('.firstNameContainer > .error').innerText = 'Invalid firstname!';
//         hasErrors = true;
//     } else {
//         document.querySelector('.firstNameContainer > .error').innerText = '';
//     }
//     if (lastName.trim().length < 4) {
//         document.querySelector('.lastNameContainer > .error').innerText = 'Invalid lastname!';
//         hasErrors = true;
//     } else {
//         document.querySelector('.lastNameContainer > .error').innerText = '';
//     }
//     if (!isEmailValid(email)) {
//         document.querySelector('.emailContainer > .error').innerText = 'Invalid email!';
//         hasErrors = true;
//     } else {
//         document.querySelector('.emailContainer > .error').innerText = '';
//     }
//     if (password.trim().length < 6) {
//         document.querySelector('.passwordContainer > .error').innerText = 'Invalid password!';
//         hasErrors = true;
//     } else {
//         document.querySelector('.passwordContainer > .error').innerText = '';
//     }
//     if (repeatPassword !== password) {
//         document.querySelector('.repeatPasswordContainer > .error').innerText = 'Invalid repeated password!';
//         hasErrors = true;
//     } else {
//         document.querySelector('.repeatPasswordContainer > .error').innerText = '';
//     }

//     if (!hasErrors) {
//         userStorage.register(firstName, lastName, email, password);
//         document.querySelector('.justLogin').style.display = 'block';
//         document.querySelector('.justRegister').style.display = '';
//     }
// });

// });

// $('.enterButton > button').on('click', function (event) {
//     event.preventDefault();

//     const email = $('#email').val();
//     const password = $('#password').val();

//     if (userStorage.login(email, password)) {
//         $('.justLogin').css('display', 'none');
//     } else {
//         $('#email').css('border-color', 'rgb(185, 9, 9)');
//         $('#password').css('border-color', 'rgb(185, 9, 9)');
//     }
// });
function userController() {
    $.get('login.htm').then(text => {
        $('main').html(text);


        $('#newRegister > button').on('click', function (event) {
            event.preventDefault();
            $('.justRegister').css('display', 'block')
            $('.justLogin').css('display', 'none');
        });

        $('.enterButton > button').on('click', function (event) {
            event.preventDefault();

            const email = $('#email').val();
            const password = $('#password').val();
            
            if (userStorage.login(email, password)) {
                $('.justLogin').css('display', 'none');
                location.replace('#page=home');
                $('#loginPage').text('ИЗХОД');
              
            } else {
                $('#email').css('border-color', 'rgb(185, 9, 9)');
                $('#password').css('border-color', 'rgb(185, 9, 9)');
            }
        });

        $('.registerButton > button').on('click', function (event) {
            event.preventDefault();

            const firstName = $('#firstname').val();
            const lastName = $('#lastname').val();
            const email = $('#email2').val();
            const password = $('#password2').val();
            const repeatPassword = $('#repeatpassword').val();
            let hasErrors = false;

            if (firstName.trim().length < 3) {
                $('.firstNameContainer > .error').text('Invalid firstname!');
                hasErrors = true;
            } else {
                $('.firstNameContainer > .error').text('');
            }
            if (lastName.trim().length < 3) {
                $('.lastNameContainer > .error').text('Invalid lastname!');
                hasErrors = true;
            } else {
                $('.lastNameContainer > .error').text('');
            }
            if (email.trim().length < 3) {
                $('.emailContainer > .error').text('Invalid email!');
                hasErrors = true;
            } else {
                $('.emailContainer > .error').text('');
            }
            if (password.trim().length < 3) {
                $('.passwordContainer > .error').text('Invalid password!');
                hasErrors = true;
            } else {
                $('.passwordContainer > .error').text('');
            }
            if (repeatPassword.trim().length < 3) {
                $('.repeatPasswordContainer > .error').text('Invalid repeated password!');
                hasErrors = true;
            } else {
                $('.repeatPasswordContainer > .error').text('');
            }
            
            if(!($('#checkbox1').is(':checked'))) {
                hasErrors = true;
                $('.checkbox > .error').text('You must check this!');
            }else{
                $('.checkbox > .error').text('');
            }
            if(!($('#checkbox2').is(':checked'))) {
                hasErrors = true;
                $('.checkbox > .error').text('You must check this!');
            }else{
                $('.checkbox > .error').text('');
            }
            if(!($('#checkbox3').is(':checked'))) {
                hasErrors = true;
                $('.checkbox > .error').text('You must check this!');
            }else{
                $('.checkbox > .error').text('');
            }

            if (!hasErrors) {
                userStorage.register(firstName, lastName, email, password);
                $('.justLogin').css('display', 'block');
                $('.justRegister').css('display', 'none');
            }
        });
    });
    console.log('login');
}

function isEmailValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}