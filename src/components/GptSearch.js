import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import {BG_URL} from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div>
        <img src={BG_URL}
        className='fixed -z-10'
        alt = "Logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch;
