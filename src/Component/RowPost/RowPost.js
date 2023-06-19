import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import { imageUrl,API_KEY } from '../../Constants/contants'
import axios from '../../axios'
function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId,setUrlid]=useState("")
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            // console.log(response.data);
            setMovies(response.data.results)
        }).catch(err=>{
        //   console.log(err)
        })
    })

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
  const handleMovie =(id)=>{
console.log(id);
axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
    console.log(response.data)
    if(response.data.results.length !==0){
        setUrlid(response.data.results[0])
    }else{
        console.log(response.data.results.length,"array length ");
    }
})
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
          {movies.map((obj)=>
        <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} />
          )}
        
      </div>
      { urlId && <Youtube videoId={urlId.key} opts={opts} /> }  
    </div>
  )
}

export default RowPost
