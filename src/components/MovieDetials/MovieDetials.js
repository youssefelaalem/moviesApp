import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncMoviseOrShows, getAllMoviesOrShows, removeSelectedMoviesOrShow } from '../../features/movie/movieSlice'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faThumbsUp ,faFilm,faCalendar} from "@fortawesome/free-solid-svg-icons";
import './MovieDetials.css'
const MovieDetials = () => {
  const {imdbID} = useParams()// object فى idبيرجع ال
  const dispatch =useDispatch()
 const data= useSelector(getAllMoviesOrShows)
 useEffect(()=>{
 dispatch(fetchAsyncMoviseOrShows(imdbID))
 return ()=>{
  dispatch(removeSelectedMoviesOrShow())
 }
 },[dispatch,imdbID])
  return (
   <div className='movie-section'>
   {data.Error ? <h1>{data.Error}</h1>:
   Object.keys(data).length===0? (
    <div>Loading...</div>
   ):(
    <>
    <div className='section-left'>
      <div className='movie-title'> {data.Title}</div>
      <div className='movie-rating'>
        <span>
          IMDB Rating <FontAwesomeIcon style={{color:"#ff9e00"}} icon={faStar}/>:{data.imdbRating}
        </span> 
        <span>
          IMDB Votes <FontAwesomeIcon style={{color:"fafafa"}} icon={faThumbsUp}/>:{data.imdbVotes}
        </span> 
        <span>
         Runtime <FontAwesomeIcon style={{color:"rgb(191,213,214)"}} icon={faFilm}/>:{data.Runtime}
        </span> 
        <span>
         Year <FontAwesomeIcon style={{color:"peachpuff"}} icon={faCalendar}/>:{data.Year}
        </span>
      </div>
      <div className='movie-plot'>{data.Plot}</div>
      <div className='movie-info'>
        <div>
          <span>Director</span>
          <span>{data.Director}</span>
        </div>
        <div>
          <span>Actors</span>
          <span>{data.Actors}</span>
        </div>
        <div>
          <span>Genres</span>
          <span>{data.Genre}</span>
        </div>
        <div>
          <span>Languages</span>
          <span>{data.Language}</span>
        </div>
        <div>
          <span>Awards</span>
          <span>{data.Awards}</span>
        </div>
      </div>
    </div>
    <div className='section-right'>
      <img src={data.Poster} alt={data.Title}/>
    </div>
    </>
   )}
   </div>
  )
}

export default MovieDetials


