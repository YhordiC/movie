import { useSearchParams } from "react-router-dom";
import { MoviesGRid } from "../componets/moviesGrid";
import { Search } from "../componets/Search";
import { useDebounce } from "../hooks/useDebonce";


export function LandigPage() {
  const [query] = useSearchParams();
  const search = query.get("search");
  const debouncedSearch = useDebounce(search, 1000)
  return (
    <div>
      <Search />
      <MoviesGRid key={debouncedSearch} search={debouncedSearch} />
    </div>

  );
}