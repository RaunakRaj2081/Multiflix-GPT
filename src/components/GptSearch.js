import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestios from './GptMovieSuggestios';
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
      <GptMovieSuggestios />
    </div>
  )
}

export default GptSearch;
