import styles from "./movieCard.module.css"
import { Link } from "react-router-dom";
import { getMoviePoster } from "../utils/getMoviePoster";


export function MovieCard({ movie }) {
  const imagURL = getMoviePoster(movie.poster_path, 300);
  return (<li className={styles.movieCard}>
    <Link to={"/movies/" + movie.id}>
      <img
        width={230}
        height={345}
        src={imagURL}
        className={styles.movieImage}
        alt={movie.title} />
      <div>{movie.title}</div>
    </Link>

  </li>)
}