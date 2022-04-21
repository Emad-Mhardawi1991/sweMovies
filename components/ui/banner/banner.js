import Image from "next/image";
import { useState, useEffect } from "react";


import Button from "../button/button";
import classes from "./banner.module.css";

const Banner = (props) => {
  const [movie, setMovie] = useState()
  useEffect(()=>{
    const randomMovieIndex = Math.floor(Math.random()* props.data.results.length)
    const randomMovie = props.data.results[randomMovieIndex]
    setMovie(randomMovie)
  },[props.data.results])

  console.log(movie)
if(!movie) return

  return (
    <div className={classes.banner}>
    
  <div className={classes.overlay}></div>
      <div className={classes.banner_image}>
        <Image 
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} 
        layout="fill" 
        objectFit="cover"
        />
      </div>
      <div className={classes.banner_text_content}>
        <h3 className={classes.movie_title}>{movie.title || movie.name }</h3>
        <p className={classes.movie_overview}>{movie?movie.overview : null}</p>
        <div className={classes.buttons}>
          <Button className={classes.btn}>Play</Button>
          <Button className={classes.btn}>Details</Button>
        </div>
       
      </div>
      
    </div>
  );
};

export default Banner;



