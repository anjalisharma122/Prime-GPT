import React from 'react';
import VideoTitle from "./VideoTitle";
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const movies =useSelector((store)=>store.movies?.nowPlayingmovies);

  if (!movies || movies.length === 0) return null; 

  const mainMovie = movies[0];
 
  const {original_title ,overview ,id }= mainMovie;




  return (
    <div>
      <VideoTitle title={original_title } overview={overview} />

      <VideoBackground movie_id ={id}/>
    </div>
  );
};


export default MainContainer
