import React from 'react'
import Slider from 'react-slick'
import { useSelector } from 'react-redux'
import {getAllMovies, getAllShows} from '../../features/movie/movieSlice'
import  MoviesCard  from '../MoviesCard/MoviesCard'
import './MovieListing.css'
import { settings } from '../../common/Settings'
const MovieListing = () => {
 
  const movies=useSelector(getAllMovies)
  const shows =useSelector(getAllShows)
console.log(movies);
  let renderMovies,renderShows="";

  renderMovies= 
  movies.Response==="True"? (
    movies.Search.map((movie,index)=>(
      <MoviesCard key={index} data={movie}/>
    )
  )
  ):(
    <div className='movies-error'>
      <h3>{movies.error}</h3>
    </div>
  )

  renderShows= 
  shows.Response==="True"? (
    shows.Search.map((movie,index)=>(
      <MoviesCard key={index} data={movie}/>
    )
  )
  ):(
    <div className='shows-error'>
      <h3>{shows.error}</h3>
    </div>
  )
  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        { movies.Error? <h1>a name of movie is incorrect</h1>:
        Object.keys(movies).length===0?(
          <div>...Loading</div>
        ):(
        <div className='movie-container'>

        <Slider  {...settings}>{renderMovies}</Slider></div>
        ) }

      </div>
      <div className='show-list'>
        <h2>Shows</h2>
      {shows.Error? <h1>a name of movie is incorrect</h1>:
      Object.keys(shows).length===0?(
        <div>...Loading</div>
      ):(
        <div className='movie-container'><Slider  {...settings}>{renderShows}</Slider></div>
      )}
      </div>
    </div>
  )
}

export default MovieListing