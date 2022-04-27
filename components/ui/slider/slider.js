import { useRef, useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import MovieCard from "../card/card";



const Slider = (props) => {
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
    <div className='container z-50 text-white  relative mb-4'>
      <h6 className='text-2xl font-bold md:text-3xl  pb-4 md:-bottom-8'>{props.title}</h6>
      <div ref={slidesRowRef} className=" group min-h-[200px] w-full gap-10 flex  overflow-x-scroll  hideScroll">
        <ChevronRightIcon onClick={()=>handleClick('right')} className= "  w-12 absolute right-2  top-[58%] -translate-y-1/2 opacity-0 hover:scale-125 transition duration-75 cursor-pointer  group-hover:opacity-100 z-50 "/>
        {isMoved && 
        <ChevronLeftIcon onClick={()=>handleClick('left')} className="    w-12 absolute left-2  top-[58%]  -translate-y-1/2 opacity-0 hover:scale-125 transition duration-75 cursor-pointer group-hover:opacity-100 z-50 "/>
        }
        {movies.map(movie=> <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Slider;

