import styles from "./movieCard.module.css"
import { Link } from "react-router-dom";

export function MovieCard({movie}){
    const imagURL="https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (<li className={styles.movieCard}>
           <Link to={"/movies/" + movie.id}>
           <img 
               width={230}
               height={345}
               src={imagURL} 
               className={styles.movieImage} 
               alt={movie.title}/>
             <div>{movie.title}</div>
           </Link> 
             
        </li>)
}