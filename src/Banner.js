import React,{useState,useEffect} from 'react'
import './banner.css'
import axios from './axios'
import requests from './requests'
const base_url="http://image.tmdb.org/t/p/original/";
function Banner() {
    const[movie,setMovie]=useState([])
    useEffect(() => {
        async function fetchData(){
            const request=await axios.get(requests.fetchNetflixOrginals)
            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)]);
            return Request
        }
        fetchData(); 
     }, [])
    function truncate(str,n){
return str?.length>n ? str.substr(0,n-1)+"...":str;
    }
    return (
       <header 
       className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}>
<div className="banner_content">
    <h1 className="baner_title">
{movie?.title||movie?.name||movie.original_name}
    </h1>
<div className="banner_buttons">
<button className="banner_button">Play</button>
<button className="banner_button">My List</button>
</div>
<h1 className="banner_discription">{truncate(movie?.overview,150)}</h1>
</div>
<div className="banner_fadebutton"/>
       </header>
    )
}

export default Banner
