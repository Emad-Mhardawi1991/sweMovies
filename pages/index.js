import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/ui/button/button";
import Hero from "../components/ui/hero/hero";
import MoviesSlider from "../components/ui/moviesSlider/moviesSlider";
import classes from "../styles/Home.module.css";
import requests from "../utils/requests";

export default function Home(props) {
  return (
    <div className={classes.container}>
      <Head>
        <title>Swe Movie App</title>
        <meta name="description" content="movie app created by Emad Mhardawi" />
        <meta name="theme-color" content="#212529" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <section className="w-full py-24 relative min-h-[700px]  ">
        <div className=" w-full h-full -z-50 absolute left-0 top-0">
          <Image src='/images/bg-2.jpg' layout='fill' objectFit="center"/>
        </div>
        <div className=" bg-dark_gray w-full h-full -z-40 absolute left-0 top-0 opacity-95"></div>
        
        <div className="container z-50">
          <div className="flex flex-col justify-between items-center lg:flex-row space-y-5">
            <h3 className="text-white font-semibold text-3xl">
              Upcoming Movies
            </h3>
            <div className="text-white space-x-2 active">
              <Button className='text-xs sm:px-6 sm:py-3 sm:text-[16px] ' >Movies</Button>
              <Button  className='text-xs sm:px-6 sm:py-3 sm:text-[16px] border-gray-500 '>TV Shows</Button>
              <Button  className='text-xs sm:px-6 sm:py-3 sm:text-[16px] border-gray-500 '>Anime</Button>
              <div></div>
            </div>
          </div>
        </div>
        <MoviesSlider movies={props.upcomingMovies} title='' />
      </section>
    </div>
  );
}




export const getStaticProps = async ()=>{
  const { tv_shows_popular_url,  trending_Movies_url} = requests;
  const  tv_shows_popular_req = axios.get(tv_shows_popular_url)
  const  movies_popular_req = axios.get(trending_Movies_url)
  const [popularTv, upcomingMovies] = await axios.all([tv_shows_popular_req, movies_popular_req])
  console.log(popularTv.data)

  return{
    props:{
      upcomingMovies: popularTv.data,
      upcomingTvShows: 'upcoming TvShows',
      upcomingAnime: 'anime'
    }
  }
}