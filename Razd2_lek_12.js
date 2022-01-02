const numberOfFilms = [];
numberOfFilms [0] = prompt("Сколько фильмов Вы посмотрели ?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat:false

};


const lastFilms1 = prompt("Один из последних фильмов которые Вы смотрели ?", ""),
    allOfFilms2 = +prompt("Насколько баллов Вы его оцените ?", ""),
    lastFilms3 = prompt("Один из последних фильмов которые Вы смотрели ?", ""),
    allOfFilms4 = +prompt("Насколько баллов Вы его оцените ?", "");

personalMovieDB.movies [lastFilms1]= allOfFilms2;
personalMovieDB.movies [lastFilms3]= allOfFilms4;



    console.log ( personalMovieDB);