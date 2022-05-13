import { MoviesGRid } from "../componets/moviesGrid";
import { Search } from "../componets/Search";
import { useDebounce } from "../hooks/useDebonce";
import { useQuery } from "../hooks/useQuery";

export function LandigPage() {
  const query = useQuery();
  const search = query.get("search");
  const debouncedSearch = useDebounce(search, 1000)
  return (
    <div>
      <Search />
      <MoviesGRid key={debouncedSearch} search={debouncedSearch} />
    </div>

  );
}