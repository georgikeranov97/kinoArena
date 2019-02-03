window.addEventListener('DOMContentLoaded', function () {
    function getMovies(movie) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://www.omdbapi.com/?t=' + movie + '&apikey=BanMePlz', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    const data = JSON.parse(xhr.responseText);
                    const content = `
                        <img src='${data.Poster}'>
                    `;
                    const titleContent = `
                        <h3> ${data.Title} </h3>
                        <div class="infoZaFilma">
                        <div class="stars">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                        <div class="LanguageAge"><img src="withBGLanguage.png" alt=""></div>
                        <div class="LanguageAge"><img src="bezOgranicheniqVyzrast.png" alt=""></div>
                    </div>
                    `
                    document.getElementById('snimka').innerHTML = content;
                    document.getElementById('movieTitle').innerHTML = titleContent;
                }
            }
        }
        xhr.send(null);
    }

    // document.getElementById('show').addEventListener('click', () => {
    //     var movie = document.getElementById('movie').value;
    //     getMovies(movie);
    // })
    let movies = ['Batman', 'Titanic'];
    movies.forEach(movie => getMovies(movie));
})