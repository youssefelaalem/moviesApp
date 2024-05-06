import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'

import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movie/movieSlice'
const Home = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    const movieText = "Harry";
     const seriesText = "Friends";

   dispatch(fetchAsyncMovies(movieText))
   dispatch(fetchAsyncShows(seriesText))
   
  }, [dispatch])

  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing/>
    </div>
  )
}

export default Home