import classes from "./movies.module.css";
import axios from "axios";
import Image from "next/image";
import Banner from "../../components/ui/banner/banner";
import requests from "../../utils/requests";
import Slider from "../../components/ui/slider/slider";

const MoviesPage = (props) => {
console.log('dddddd', props.topRatedMovies)

  if (!props.trendingMovies) return <h1>Loading</h1>;

  return (
    <div>
      <Banner data={props.trendingMovies} />
      <section className={classes.movies_section}>
        <div className={classes.overlay}></div>
        <div className={classes.bg_box}>
          <Image src="/images/bg-2.jpg" layout="fill" objectFit="cover" />
        </div>
        <Slider movies={props.popularMovies} title="Popular Now"  />
        <Slider movies={props.topRatedMovies} title="Top Rated" />
        <Slider movies={props.actionMovies} title="Action" />
        <Slider movies={props.ComedyMovies} title="Comedy" />
      </section>
    </div>
  );
};

export default MoviesPage;

export const getStaticProps = async () => {
  const { trending_Movies_url, action_Movies_url, popular_now_url, top_rated_movies_url, comedy_movies_url } = requests;
  try {
    const trendingReq = axios.get(trending_Movies_url);
    const actionReq = axios.get(action_Movies_url);
    const popularReq = axios.get(popular_now_url);
    const topRatedReq = axios.get(top_rated_movies_url)
    const comedyReq = axios.get(comedy_movies_url)
    const [trendingMovies, actionMovies, popularMovies, topRatedMovies, ComedyMovies ] = await axios.all([
      trendingReq,
      actionReq,
      popularReq,
      topRatedReq,
      comedyReq
    ]);
    return {
      props: {
        trendingMovies: trendingMovies.data,
        actionMovies: actionMovies.data,
        popularMovies: popularMovies.data,
        topRatedMovies: topRatedMovies.data,
        ComedyMovies: ComedyMovies.data
      },
      revalidate: 20000
    };
  } catch (err) {
    return {
      props: {
        error: err.message,
      },
    };
  }
};