import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/ui/button/button";
import Hero from "../components/ui/hero/hero";
import Slider from "../components/ui/slider/slider";
import classes from "../styles/Home.module.css";
import requests from "../utils/requests";
import { CalculatorIcon, ClockIcon, StarIcon, VideoCameraIcon } from '@heroicons/react/solid'
import PricingSection from "../components/ui/pricingSection/pricing";

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
          <Image src="/images/bg-2.jpg" layout="fill" objectFit="center" />
        </div>
        <div className=" bg-dark_gray w-full h-full -z-40 absolute left-0 top-0 opacity-95"></div>

        <div className="container z-50">
          <div className="flex flex-col justify-between items-center lg:flex-row space-y-5">
            <h3 className="text-white font-semibold text-3xl">
              Upcoming Movies
            </h3>
            <div className="text-white space-x-2 active">
              <Button className="text-xs sm:px-6 sm:py-3 sm:text-[16px] ">
                Movies
              </Button>
              <Button className="text-xs sm:px-6 sm:py-3 sm:text-[16px] border-gray-500 ">
                TV Shows
              </Button>
              <Button className="text-xs sm:px-6 sm:py-3 sm:text-[16px] border-gray-500 ">
                Anime
              </Button>
              <div></div>
            </div>
          </div>
        </div>
        <Slider movies={props.upcomingMovies} title="" />
      </section>

      <section className="w-full py-24 relative min-h-[700px] bg-dark_gray  ">
        <div className="container  flex gap-12 flex-col md:flex-row  ">
          <div className="bg-red-100 w-full  relative">
            <Image src="/images/services_img.jpg" layout="fill" objectFit="center" />
            <div className="absolute bg-primary_red rotate-90  origin-top-left bottom-[73px] -right-[168px] text-white text-2xl py-8 px-6 font-thin">Download </div>
          </div>

          <div className=" w-full text-white">
            <h4 className="font-bold text-3xl  sm:text-5xl  md:text-4xl pb-4 ">
              Download Your Shows Watch Offline.
            </h4>
            <p className="text-[16px] font-thin pb-10">
              Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod
              tempor.There are many variations of passages of lorem Ipsum
              available, but the majority have suffered alteration in some
              injected humour
            </p>

            <div className="flex gap-6 justify-center items-center pb-8">
              <div className=" p-6 rounded-full border-dashed border-2 border-primary_red">
              <VideoCameraIcon className=" w-14"/>
              </div>
          
              <div>
                <h6 className="text-xl font-bold pb-2">Enjoy on Your TV.</h6>
                <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
              </div>
            </div>

            <div className="flex gap-6 justify-center items-center">
              <div className=" p-6 rounded-full border-dashed border-2 border-primary_red">
              <VideoCameraIcon className=" w-14"/>
              </div>
          
              <div>
                <h6 className="text-xl font-bold pb-2">Watch Everywhere.</h6>
                <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <PricingSection/>
    </div>
  );
}

export const getStaticProps = async () => {
  const { tv_shows_popular_url, trending_Movies_url } = requests;
  const tv_shows_popular_req = axios.get(tv_shows_popular_url);
  const movies_popular_req = axios.get(trending_Movies_url);
  const [popularTv, upcomingMovies] = await axios.all([
    tv_shows_popular_req,
    movies_popular_req,
  ]);
  console.log(popularTv.data);

  return {
    props: {
      upcomingMovies: popularTv.data,
      upcomingTvShows: "upcoming TvShows",
      upcomingAnime: "anime",
    },
  };
};
