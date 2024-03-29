import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import {addNowPlayingMovies} from "../utils/moviesSlice";
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
    // fetch data from tmdb API and update the store
    const nowPlay = useSelector((store) => store.movies.nowPlayingMovies);

    const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
  !nowPlay &&  getNowPlayingMovies();
  },[]);
};

export default useNowPlayingMovies;