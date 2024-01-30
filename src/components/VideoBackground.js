import React from 'react' 
import useMovieTrailor from '../hooks/useMovieTrailor'
import { useSelector } from 'react-redux';


const VideoBackground = ({movieId}) => {

    const trailorVideo = useSelector((store) => store.movies?.trailerVideo);
    console.log(trailorVideo);
    useMovieTrailor(movieId);
   
  return (
    <div>
     <iframe 
      className='w-screen aspect-video' 
      src={"https://www.youtube.com/embed/"+trailorVideo?.key +
      "?&autoplay=1&mute=1"}
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground;
