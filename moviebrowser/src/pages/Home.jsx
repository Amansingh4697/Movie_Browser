import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

const API_KEY = import.meta.env.VITE_OMDB_KEY;

export default function Home() {
  const [query, setQuery] = useState("batman");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);

  async function fetchMovies() {
    setLoading(true);

    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${page}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.Response === "True") {
      setMovies(data.Search);
      setTotalResults(Number(data.totalResults));
    } else {
      setMovies([]);
      setTotalResults(0);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchMovies();
  }, [query, page]);

  function handleSearch(e) {
    e.preventDefault();
    setPage(1);
    setQuery(e.target.elements.search.value);
  }

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input name="search" placeholder="Search movies..." />
        <button>Search</button>
      </form>

      {loading && <p>Loading...</p>}

      {!loading &&
        movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}

      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}
