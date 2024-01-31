import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addTrailerVideo } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants'

const useMovieTrailor = (movieId) => {
    
    const dispatch = useDispatch();
    const trailor = useSelector((store) => store.movies.TrailerVideo);

    // fetch trailer video && updating the store

    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",API_OPTIONS);
        const json = await data.json();
        console.log(json);
        const filteredData = json.results?.filter((video)=> video.type ==="Trailer");
        const trailer = filteredData.length ? filteredData[0] : json.results[0];
        console.log(trailer);
        dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
     !trailor &&  getMovieVideos();
    },[]);
};

export default useMovieTrailor;