import { useState, useEffect } from "react";

function App() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  async function fetchMovies() {
    const res = await fetch(
      `http://www.omdbapi.com/?s=batman&apikey=bd0897b&page=${page}`
    );
    const data = await res.json();
    setMovies(data.Search || []);
  }

  useEffect(() => {
    fetchMovies();
  }, [page]);

  return (
    <>
      <div>
        <h1>Movies (Page {page})</h1>

        {movies.map((movie) => (
          <p key={movie.imdbID}>{movie.Title}</p>
        ))}

        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>

        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </>
  );
}

export default App;
