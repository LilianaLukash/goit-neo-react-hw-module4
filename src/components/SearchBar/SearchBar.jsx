import { useState } from "react";
import { toast } from "react-hot-toast";
import styles from './SearchBar.module.css';


export default function SearchBar({ onSubmit }) {
    const [query, setQuery] = useState('');
    const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error("Please enter a search term.");
      return;
    }
    onSubmit(query);
    setQuery("");
  };
    return (
        <header className={styles.Searchbar}>
            <form  className={styles.SearchForm} onSubmit = {handleSubmit}>
                <input className="SearchForm-input "
                    type="text"
                    value = {query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search images and photos"
                    autoFocus
                    autoComplete="off"
                />
                <button type="submit">Search</button>
            </form>
        </header>
    )
}

