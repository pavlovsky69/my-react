
import style from './MovieListCard.module.scss'
import {GenresList} from "../../GenreBadge/GenresList/GenresList";
import {NavLink, useNavigate} from "react-router-dom";
import {AppRoutes} from "../../../Routing/AppRoutes";
import {App} from "../../../App";


const MoviesListCard = ({movie}) => {
    const {id, title, backdrop_path, genre_ids, popularity, release_date, vote_average} = movie;
    const imagePoster = `https://image.tmdb.org/t/p/w500/${backdrop_path}`
    const idGenre=genre_ids.map(genre=>genre)

    return (
        <div className={style.MAIN}>
            <div className={style.mainBlock}>
                <p>{title}</p>
                <p>id: {id}</p>
                <p>Genre: {idGenre}</p>
                <p>popularity: {popularity}</p>
                <p>release date: {release_date}</p>
                <p>vote average: {vote_average}</p>
                <NavLink to={AppRoutes.MovieInfo}> More information</NavLink>
                <img className={style.imagePoster} src={imagePoster} alt="image" width="400px"/>

            </div>

        </div>
    );
};
export {MoviesListCard};