import React from 'react'
import './VideoList.css'
const VideoItem = props =>{
      //   console.log(props.video)
     return <li className='collection-item avatar videoItem' style={{padding:0}} onClick={()=>props.onSubmitVideo1(props.video)}>
        <img src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.description} className='square'/>
    <span className='title'> {props.video.snippet.title}</span></li>
}
export default VideoItem