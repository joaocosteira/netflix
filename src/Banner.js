import axios from './axios';
import { useEffect, useState } from 'react';
import requests from './Requests';
import './Banner.css';

const Banner = ()  =>{

    const [movie,setMovie] = useState([]);

    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);

            var movie_idx = 0;
            
            do{
                movie_idx = Math.floor(Math.random() * request.data.results.length - 1);
            }while(!request.data.results[movie_idx].backdrop_path);

            setMovie(request.data.results[movie_idx]);
            return request;
        }
        fetchData();
    },[]);

    const truncate = (str,n=150) => str?.length > n ? str.substr(0,n-1) + '...' : str


    console.log(movie);

    return(
        <header className="banner" style={{
            backgroundSize: "cover",
            //backgroundImage: `url("/netflix_banner.jpeg")`,
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center"
        }}>
            <div className='banner__contents'>
                <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className='banner_description'>
                    { truncate(movie?.overview) }
                </h1>
            </div>
            <div className='banner--fadeBottom'/>
        </header>
    )
}

export default Banner;