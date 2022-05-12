import { useEffect, useState } from "react";

import { get } from "../utils/httpCLient";
import { useQuery } from "../hooks/useQuery";
import {MovieCard} from "./movieCard"
import { Spinner } from "./Spinner";
import  style from "./moviesGrid.module.css"
import InfiniteScroll from "react-infinite-scroll-component";

export function MoviesGRid({search} ){
  const [movies, setMovies] = useState([]);
  const[isLoading,setIsLoading]= useState(true);
  const [page,setPage] = useState(1);
  const [hasMore,setHasMore]= useState(true);

  console.log(search);

  useEffect(() => {
    setIsLoading(true);
    const searchURL= search 
    ? "/search/movie?query=" + search +"&page" + page
    : "/discover/movie?page=" + page;
    get(searchURL).then((data) => {
      setMovies((prevMovies)=> prevMovies.concat(data.results));
      setHasMore(data.page < data.total_pages);
      setIsLoading(false);
    });
  }, [search,page]);

     
    return(
      <InfiniteScroll dataLength={movies.length} 
      hasMore={hasMore}
       next={()=> setPage((prevPage)=> prevPage + 1) }
       loader={ <Spinner/>}>
         <ul className={style.moviesGrid}>
          { /**REcoro todo mi objeto movies.json con map  */
          movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}/>
          )) }          
        </ul>
      </InfiniteScroll>
       
    )
}