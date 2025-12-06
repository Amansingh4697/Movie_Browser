import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API_KEY = import.meta.env.VITE_OMDB_KEY;

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  async function fetchMovie() {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
    );
    const data = await res.json();
    setMovie(data);
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <Link to="/">⬅ Back</Link>

      <h2>{movie.Title}</h2>

      <img
        src={movie.Poster !== "N/A" ? movie.Poster : ""}
        width="200"
      />

      <p>{movie.Plot}</p>
      <p>Year: {movie.Year}</p>
      <p>IMDB Rating: {movie.imdbRating}</p>
    </div>
  );
}
