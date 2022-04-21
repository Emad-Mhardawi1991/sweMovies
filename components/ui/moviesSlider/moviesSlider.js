import { useRef, useState } from "react";
import classes from "./moviesSlider.module.css";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import MovieCard from "../card/card";



const MoviesSlider = (props) => {
  const slidesRowRef = useRef(null);
  const [isMoved, setIsMoved] = useState(false)
  const movies = props.movies.results;

  const handleClick =(direction)=>{
    setIsMoved(true)
    console.log(slidesRowRef.current)
    if(slidesRowRef.current){
      const {scrollLeft, clientWidth} = slidesRowRef.current
      console.log(scrollLeft, clientWidth)

      const scrollTo = direction ==='left'? scrollLeft - clientWidth : scrollLeft + clientWidth
     
      slidesRowRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      })

     
      
    }
  }
  return (
    <div className={classes.slider}>
      <h6 className={classes.title}>{props.title}</h6>
      <div ref={slidesRowRef} className={`group ${classes.slides} hideScroll`}>
        <ChevronRightIcon onClick={()=>handleClick('right')} className={`${classes.right_arrow} group-hover:opacity-100`}/>
        {isMoved && 
        <ChevronLeftIcon onClick={()=>handleClick('left')} className={`${classes.left_arrow}  group-hover:opacity-100`}/>
        }
        {movies.map(movie=> <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default MoviesSlider;

