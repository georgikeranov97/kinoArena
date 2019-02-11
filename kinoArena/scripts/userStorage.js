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

    let userList = [];
    if (localStorage.getItem('userList') !== null) {
        userList = JSON.parse(localStorage.getItem('userList'));
    } else {
        userList = [
            new User('Gosho', 'Goshev', 'gosho@user.com', '123456'),
            new User('admin','admin','admin@admin.bg','admin')
        ];
    }

    if (sessionStorage.getItem('currentUser') !== null) {
        currentUser = JSON.parse(localStorage.getItem('currentUser'));
    } else {
        var currentUser = null;
    }

    return {
        login: function (email, password) {
            // return userList.find(user => user.email === email && user.password === password);
            var loginUser = userList.find(user => user.email === email && user.password === password);
            if(loginUser){
                currentUser = loginUser;
                
                sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
                return true;
            }else{
                return false;
            }
        },
        getCurrentUser: function(){
            return currentUser
        },
        // logOut: function() {
        //     currentUser = null;
        //     sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
        // },
        register: function (fName, lName, email, password) {
            userList.push(new User(fName, lName, email, password));
            localStorage.setItem('userList', JSON.stringify(userList));
        },
        getFavourites: function(){
            return this.favourites
        },
        getTickets: function(){
            return this.tickets
        }
    }
})();