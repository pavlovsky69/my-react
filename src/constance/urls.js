const baseUrl = 'https://api.themoviedb.org/3';

const moviesList = '/discover/movie';
const moviesGenre = '/genre/movie/list';

const urls = {
    moviesList:{
        base:moviesList,
        byId:(id)=>`${moviesList}?page=${id}`
    },
    moviesGenre:{
        base:moviesGenre
    }
}

export {baseUrl,urls}