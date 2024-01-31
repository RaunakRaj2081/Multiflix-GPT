import React, { useEffect } from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
     useNowPlayingMovies();
     usePopularMovies();
     useUpcomingMovies();
     useTopRatedMovies();

     const select = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div>
      <Header />
     {
      select ? (<GptSearch />) : 
      <>
      (<MainContainer />
      <SecondaryContainer />)
      </>
     } 
    </div>
  )
}

export default Browse;
