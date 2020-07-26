import React, { useMemo } from 'react';
import { useMovie } from '../../context/movieContext';
import { buildImagePath } from '../../utils';

const MovieImage = () => {
    const movie = useMovie();

    const imgSrc = useMemo(( ) => buildImagePath(movie.poster_path, 200), [movie]);

    return (
        <img className="movie-image" src={imgSrc} alt={movie.title} />
    )
}

export default MovieImage;