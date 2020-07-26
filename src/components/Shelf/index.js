import React, { useEffect, useState, useRef, useCallback } from "react";
import { MovieContextProvider } from "../../context/movieContext";
import MovieImage from "../Movie/MovieImage";
import MovieTitle from "../Movie/MovieTitle";
import useRequest from "../../hooks/useRequest";
import "./Shelf.css";
import { movieApiKey } from "../../utils";

const Shelf = () => {
  const [listMovies, setListMovies] = useState([]);
  const [prevY, setPrevY] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [observe, setObserve] = useState(null);

  const loadingRef = useRef(null);

  const { doRequest } = useRequest({
    url: `https://api.themoviedb.org/3/movie/popular?api_key=${movieApiKey}&language=en-US&page=${page}`,
    method: "get",
    onSuccess: (data) => {
      setListMovies([...listMovies, ...data.results]);
      setLoading(false);
    },
  });

  const handleObserver = (entities, observer) => {
    const y = entities[0].boundingClientRect.y;
    if (entities[0].isIntersecting) {
      console.log("hey", page + 1);
      setPage(page + 1);
    }

    setPrevY(y);
  };

  useEffect(() => {
    let observer = null;
    if (loadingRef) {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      };

      observer = new IntersectionObserver(handleObserver, options);

      observer.observe(loadingRef.current);
    }
    return () => {
      if (observer) {
          observer.disconnect();
      }
    };
  }, [loadingRef, handleObserver]);

  useEffect(() => {
    console.log(page);
    if (!loading) {
      setLoading(true);
      doRequest();
    }
  }, [page]);

  return (
    <div className="flex flex-row flex-wrap w-100 pt5">
      {listMovies &&
        listMovies.map((movie, idx) => (
          <MovieContextProvider key={idx} movie={movie}>
            <div className="flex flex-column pl3 pr3 movie-container">
              <MovieImage />
              <MovieTitle />
            </div>
          </MovieContextProvider>
        ))}
      <div ref={loadingRef} className="w-100" style={{ height: "100px" }}>
        <span className="white pa3 tc w-100">
          {loading ? "Loading..." : `Showing ${listMovies.length} results`}
        </span>
      </div>
    </div>
  );
};

export default Shelf;
