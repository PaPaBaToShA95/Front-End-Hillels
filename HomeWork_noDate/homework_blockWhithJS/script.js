let films = [];
let list = document.getElementById('list');
let addFilm = document.getElementById('addFilm');
let nameFilm = document.getElementById('nameFilm');
let yearFilm = document.getElementById('yearFilm');
let genreFilm = document.getElementById('genreFilm');
let ratingFilm = document.getElementById('ratingFilm');
let posterFilm = document.getElementById('posterFilm');
let trailerFilm = document.getElementById('trailerFilm');
let linkFilm = document.getElementById('linkFilm');
let descriptionFilm = document.getElementById('descriptionFilm');

addFilm.addEventListener('click', function () {
    let film = {
        name: nameFilm.value,
        year: yearFilm.value,
        genre: genreFilm.value,
        rating: ratingFilm.value,
        poster: posterFilm.value,
        trailer: trailerFilm.value,
        link: linkFilm.value,
        description: descriptionFilm.value
    }
    films.push(film);
    render();
});

function render() {
    list.innerHTML = '';
    films.forEach(function (film, index) {
        let item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `
            <div class="poster">
                <img class="poster" src="${film.poster}" alt="">
            </div>
            <div class="info">
                <div class="name">${film.name}</div>
                <div class="year">${film.year}</div>
                <div class="genre">${film.genre}</div>
                <div class="rating">${'⭐'.repeat(Math.round(film.rating))}</div>
                <div class="description">${film.description}</div>
                <div class="btns">
                <a href="${film.trailer}" class="btn">Дивитись трейлер</a>
                <a href="${film.link}" class="btn">Дивитись фільм</a>
                <button class="btn" onclick="deleteFilm(${index})">Видалити</button>
            </div>
            </div>
            `;
        list.appendChild(item);
    });
}

function deleteFilm(index) {
    films.splice(index, 1);
    render();
}