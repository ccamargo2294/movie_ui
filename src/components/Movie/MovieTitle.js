import React from "react";
import { useMovie } from "../../context/movieContext";

const MovieTitle = () => {
  const movie = useMovie();

  return <span className="white tc pt2 pb2 f5">{movie.title}</span>;
};

export default MovieTitle;