import axios from "axios";

const MovieDetailsPage = (props) => {
  console.log(props);
  return <div>sdsdsdsds</div>;
};

export default MovieDetailsPage;

export const getServerSideProps = async (context) => {
  const movieId = context.query.id;
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  const response = await axios.get(url)
  const data = await  response.data;
 


  
  


  return {
    props: {
      moviesDetails: data,
    },
  };
 
  
};
