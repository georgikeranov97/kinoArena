var userStorage = (function () {

    class User {
        constructor(fName, lName, email, password) {
            this.fName = fName;
            this.lName = lName;
            this.email = email;
            this.password = password;
            this.tickets = [];
            this.favourites=[];
            // this.repeatPassword = repeatPassword;
        }
        buyTicket(ticket){
            this.tickets.push(ticket)
        }
        addToFavourites(movie){
            this.favourites.push(movie)
        }
        
    }
    let userList = []
    if (localStorage.getItem('userList') !== null) {
        userList = JSON.parse(localStorage.getItem('userList'));
    } else {
        userList = [
            new User('Gosho', 'Goshev', 'gosho@user.com', '123456')
        ];
    }
    return {
        login: function (email, password) {
            return userList.find(user => user.email === email && user.password === password);
        },

        register: function (fName, lName, email, password) {
            userList.push(new User(fName, lName, email, password));
            localStorage.setItem('userList', JSON.stringify(userList));
        }
    }
})();