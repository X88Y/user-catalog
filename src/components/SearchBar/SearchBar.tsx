import { SearchIcon } from "./ui/SearchIcon";
import styles from "./SearchBar.module.css";

interface Props {
  value: string;
  onChange: (query: string) => void;
  onSubmit: () => void;
}

export function SearchBar({ value, onChange, onSubmit }: Props) {
  return (
    <form
      className={styles.searchBar}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div className={styles.inputWrap}>
        <span className={styles.searchIcon} aria-hidden="true">
          <SearchIcon />
        </span>
        <input
          className={styles.input}
          type="search"
          placeholder="Search by name…"
          aria-label="Search users by name"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      <button type="submit" className={styles.searchButton}>
        Search
      </button>
    </form>
  );
}
