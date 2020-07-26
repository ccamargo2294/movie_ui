import React, { useContext } from 'react';

const MovieContext = React.createContext(null);

export const MovieContextProvider = ({ movie, children }) => {
    return (
        <MovieContext.Provider value={movie}>
            {children}
        </MovieContext.Provider>
    )
}

export const useMovie = () => {
    return useContext(MovieContext);
}