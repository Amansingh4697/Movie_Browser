import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div style={{ margin: "10px 0" }}>
      <Link to={`/movie/${movie.imdbID}`}>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : ""}
          width="120"
        />
        <p>{movie.Title}</p>
        <small>{movie.Year}</small>
      </Link>
    </div>
  );
}
