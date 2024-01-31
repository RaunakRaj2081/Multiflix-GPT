import { API_OPTIONS } from '../utils/constants';
import { useDispatch , useSelector } from 'react-redux';
import {addTopRatedMovies} from "../utils/moviesSlice";
import { useEffect} from 'react';

const useTopRatedMovies = () => {
    // fetch data from tmdb API and update the store

    const dispatch = useDispatch();
    const top = useSelector((store) => store.movies.topRatedMovies);
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
  !top &&  getTopRatedMovies();
  },[]);
};

export default useTopRatedMovies;