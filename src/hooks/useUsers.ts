import { useState, useEffect, useCallback } from "react";
import { fetchUsers, searchUsers } from "../api";
import type { User } from "../types";

const PAGE_SIZE = 12;

interface UseUsersReturn {
  users: User[];
  total: number;
  page: number;
  totalPages: number;
  isLoading: boolean;
  error: string | null;
  searchInput: string;
  setSearchInput: (q: string) => void;
  submitSearch: () => void;
  setPage: (p: number) => void;
}

export function useUsers(): UseUsersReturn {
  const [users, setUsers] = useState<User[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPageState] = useState(1);
  const [query, setQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async (query: string, page: number) => {
    setIsLoading(true);
    setError(null);
    try {
      const skip = (page - 1) * PAGE_SIZE;
      const data = query.trim()
        ? await searchUsers(query.trim(), PAGE_SIZE, skip)
        : await fetchUsers(PAGE_SIZE, skip);
      setUsers(data.users);
      setTotal(data.total);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    load(query, page);
  }, [load, query, page]);

  const submitSearch = useCallback(() => {
    setQuery(searchInput);
    setPageState(1);
  }, [searchInput]);

  const setPage = useCallback((p: number) => {
    setPageState(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const totalPages = Math.ceil(total / PAGE_SIZE);

  return {
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
  };
}
