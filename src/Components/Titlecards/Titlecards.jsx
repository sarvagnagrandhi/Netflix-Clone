import React, { useEffect, useState } from 'react'
import './Titlecards.css'
import { Link } from 'react-router-dom';


const Titlecards = ({title, category}) => {

  const[apiData,setApiData] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjk2NDg0MzQ0Yjg5ZDI1YWI2YmU1NjgwMzIwMDdhNiIsIm5iZiI6MTcxOTQ4ODUwNi45NzIxMzgsInN1YiI6IjY2N2Q0ZDAxNjJkOTA5MWM0MDhjZmYwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hE8UnthL2VmHRVXLujf-Nz3ZyYAlA23hUmJjnDAlJD4'
    }
  };

  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));
  },[])

  return ( 
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list">
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt=''/>
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default Titlecards
