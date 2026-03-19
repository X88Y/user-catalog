import { SearchBar } from "./components/SearchBar";
import { UserCard } from "./components/UserCard";
import { Pagination } from "./components/Pagination";
import { SkeletonCard } from "./components/SkeletonCard";
import { useUsers } from "./hooks/useUsers";
import styles from "./App.module.css";

const SKELETON_COUNT = 12;

export default function App() {
  const {
    users,
    total,
    page,
    totalPages,
    isLoading,
    error,
    searchInput,
    setSearchInput,
    submitSearch,
    setPage,
  } = useUsers();

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <div className={styles.appHeaderInner}>
          <div className={styles.appHeaderTitleRow}>
            <h1 className={styles.appHeaderTitle}>User Catalog</h1>
          </div>
          <SearchBar
            value={searchInput}
            onChange={setSearchInput}
            onSubmit={submitSearch}
          />
          {total > 0 && (
            <span className={styles.appHeaderCount}>{total} users</span>
          )}
        </div>
      </header>

      <main className={styles.appMain}>
        {error && (
          <div className={styles.errorBanner} role="alert">
            <strong>Error:</strong> {error}
          </div>
        )}

        {!error && !isLoading && users.length === 0 && (
          <div className={styles.emptyState}>
            <span className={styles.emptyStateIcon}>🔍</span>
            <p>No users found. Try a different search term.</p>
          </div>
        )}

        <div className={styles.userGrid}>
          {isLoading
            ? Array.from({ length: SKELETON_COUNT }).map((_, i) => (
              <SkeletonCard key={i} />
            ))
            : users.map((user) => <UserCard key={user.id} user={user} />)}
        </div>

        <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
      </main>
    </div>
  );
}
