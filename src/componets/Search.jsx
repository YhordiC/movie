import styles from "./search.module.css"
import {FaSearch} from "react-icons/fa"

import { useQuery } from "../hooks/useQuery";
import { useHistory } from "react-router";


export function Search() {
    const query=useQuery();
    const search= query.get("search");


    const history = useHistory();
     
     

    const handleSubmit =(e) => {
        e.preventgitDefault();
     
    };
    return (
        <form className={styles.SearchContainer} onSubmit={handleSubmit}>
            <div className={styles.Searchbox}>
                <input className={styles.SearchInput} 
                type="text" 
                value={search} 
                placeholder="Title"

                autoFocus={true}
                aria-label="Search movies"
                onChange={(e)=> 
                    {  const value= e.target.value;
                       
                      history.push("/?search=" + value);
                    }}/>
                <button className={styles.SearchButton} type="submit">
                    <FaSearch size={20}/>
                </button>
            </div>
        </form>
    )
}
