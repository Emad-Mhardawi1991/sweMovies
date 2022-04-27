import Link from "next/link";
import { CalculatorIcon, ClockIcon, StarIcon} from '@heroicons/react/solid'
import Image from "next/image";
import classes from "./card.module.css";

const MovieCard = (props) => {


  const releaseDate  = new Date(props.movie.first_air_date)
  const formattedDate = releaseDate.toLocaleDateString('en-Us',{year: 'numeric'})
  console.log(formattedDate)

  console.log('ddddd----', props.movie )
  return (
    <div className=" bg-dark_gray w-[310px] min-w-[100%]  sm:min-w-[48%] md:min-w-[32%]  xl:min-w-[25%]    flex flex-col space-y-4">
      <div className=" w-full h-[400px] min-h-[70%]  relative rounded-t-lg overflow-hidden">
        <Image 
          src={`https://image.tmdb.org/t/p/w500/${  props.movie.poster_path||  props.movie.backdrop_path}`} 
          layout="fill" 
         />
         <p className="border-2 w-fit font-bold text-white text-[14px] px-2 absolute top-2 left-2 bg-primary_red border-primary_red">4K</p>
      </div>

      <div className="flex justify-between flex-col flex-grow space-y-5 pb-5 px-2">
      <div className="flex justify-between items-start space-x-8 flex-grow ">
      <date className='text-primary_red'>{formattedDate}</date>
      <div className="flex justify-center items-center gap-2">
        
        <div className="flex space-x-1">
            <ClockIcon className="w-[14px] text-primary_red"/>
            <p className="text-[12px]">120min</p>
          </div>

          <div className="flex space-x-1">
            <StarIcon className="w-[14px] text-primary_red"/>
            <p className="text-[12px]">{props.movie.vote_average || 'unknown'}</p>
          </div>
      </div>
        
        
      </div>

      
      </div>
    </div>
  );
};

export default MovieCard;

/*

 <Link href={`/movies/${props.movie.id}`}>
    <Image 
      src={`https://image.tmdb.org/t/p/w500/${props.movie.backdrop_path || props.movie.poster_path}`} 
      layout="fill" 
      objectFit="cover"/>
    </Link>

    */


    /*

    <div className="flex flex-row justify-between space-x-8  ">
        <p className="border-2 w-fit font-bold text-primary_red text-[14px] px-2">4K</p>
        <div className="flex justify-center items-center space-x-3">
          <div className="flex space-x-1">
            <ClockIcon className="w-[14px] text-primary_red"/>
            <p className="text-[12px]">120min</p>
          </div>

          <div className="flex space-x-1">
            <StarIcon className="w-[14px] text-primary_red"/>
            <p className="text-[12px]">{props.movie.vote_average || 'unknown'}</p>
          </div>
        </div>
      </div>

      */