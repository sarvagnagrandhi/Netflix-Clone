import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const naviagte = useNavigate();

  const [apiData,setApiData] = useState({
    name: " ",
    key: " ",
    published_at:" ",
    typeof:" "
  });
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjk2NDg0MzQ0Yjg5ZDI1YWI2YmU1NjgwMzIwMDdhNiIsIm5iZiI6MTcxOTQ4ODUwNi45NzIxMzgsInN1YiI6IjY2N2Q0ZDAxNjJkOTA5MWM0MDhjZmYwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hE8UnthL2VmHRVXLujf-Nz3ZyYAlA23hUmJjnDAlJD4'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));

  },[])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt='' onClick={()=>{naviagte(-2)}}/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
