import React from 'react';
import { useSelector} from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movie_id}) => {
  const trailerVideo = useSelector((store)=>store.movies?.trailerVideo);
  
  useMovieTrailer(movie_id);

  
  
  return (
    <div className="w-screen">
      <iframe className="w-screen aspect-video"
        
        title="You tube player" 
         src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&rel=0&controls=0&modestbranding=1&showinfo=0`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

        >
        
      </iframe>
    </div>
  )
}

export default VideoBackground;
