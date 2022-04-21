import Link from 'next/link';
import Image from 'next/image'
import classes from './card.module.css'

const MovieCard = (props) => {
  return <div className={classes.card}>
    <Link href={`/movies/${props.movie.id}`}>
    <Image 
      src={`https://image.tmdb.org/t/p/w500/${props.movie.backdrop_path || props.movie.poster_path}`} 
      layout="fill" 
      objectFit="cover"/>
    </Link>
  </div>;
};

export default MovieCard;
