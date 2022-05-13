import placeholder from "../noimagen.jpg"

export function getMoviePoster(path, width) {
    return (path 
        ? `https://image.tmdb.org/t/p/w${width}${path}` 
     : placeholder
     );
    
}
