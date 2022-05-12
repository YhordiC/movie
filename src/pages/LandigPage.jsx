import { MoviesGRid } from "../componets/moviesGrid";
import { Search } from "../componets/Search";
import { useQuery } from "../hooks/useQuery";

export function LandigPage(){
  const query= useQuery();
  const search= query.get("search");
    return(
    <div>
      <Search/>
      <MoviesGRid key={search} search={search}/>
    </div>
      
    );
}