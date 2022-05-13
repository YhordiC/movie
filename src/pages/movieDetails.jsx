import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../componets/Spinner";
import { getMoviePoster } from "../utils/getMoviePoster";
import { get } from "../utils/httpCLient";

import style from "./MovieDetals.module.css"

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setIsLoading(false);

    });
  }, [movieId]);

  if (isLoading) {
    return <Spinner />
  }


  const imagURL = getMoviePoster(movie.poster_path, 500);
  return (
    <div className={style.detailsContainer}>

      <img
        className={`${style.col} ${style.movieImag}`}
        /*width={230}
        height={345}*/
        src={imagURL}
        alt={movie.title} />
      <div className={`${style.col} ${style.detals}`}>
        <p className={style.itemParafoOne}> <strong>Title:</strong>{movie.title}</p>
        <p> <strong>Genser:</strong>{" "}
          {movie.genres.map((genre) => genre.name).join(" ,")}
        </p>
        <p><strong>Description:</strong>{movie.overview}</p>
      </div>

    </div>
  )
}