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
        // }
        // buyTicket(ticket){
        //     ticket.forEach(t=>this.tickets.push(t) )
            
        // }
        // addToFavourites(movie){
        //     this.favourites.push(movie)
        // }
        // proveriImaLiGo(movie){
        //     var l = this.favourites.filter(m => m.id === movie.id)
        //     if (l.length<1){ 
        //         return false
        //     }
        //     return true;
        // }
        }
        
    }
    var currentUser = null;
    let userList = [];
    if (localStorage.getItem('userList') !== null) {
        userList = JSON.parse(localStorage.getItem('userList'));
    } else {
        userList = [
            new User('Gosho', 'Goshev', 'gosho@user.com', '123456'),
            new User('admin','admin','admin@admin.bg','admin')
        ];
    }

    // if (sessionStorage.getItem('currentUser') !== null) {
    //     currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // } else {
        
    // }

    return {
        login: function (email, password) {
            // return userList.find(user => user.email === email && user.password === password);
            var loginUser = $(userList).find(user => user.email === email && user.password === password);
            if(loginUser){
                sessionStorage.setItem('userList', JSON.stringify(loginUser));
                currentUser = loginUser;
                
                sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
                return true;
            }else{
                return null;
            }
        },
        getCurrentUser: function(){
            return currentUser;
        },
        logOut: function() {
            currentUser = null;
            sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
        },
        register: function (fName, lName, email, password) {
            userList.push(new User(fName, lName, email, password));
            localStorage.setItem('userList', JSON.stringify(userList));
        },
        addFavoriteMovie: (movie) => {
            // console.log(currentUser.favourites)
            // var l = currentUser.favourites.filter(m=> m.id === movie.id);
            // if (l.length>0) return;
            currentUser.favourites.push(movie);
            localStorage.setItem('userList', JSON.stringify(userList));
            return movie;
        },
        getFavourites: function(){
            return favourites;
        },
        getTickets: function(){
            return tickets;
        }
    }
})();