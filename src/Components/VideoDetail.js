import React from 'react'

const VideoDetail=props=>{
    if(!props.video){
        return <div>Loading</div>
    }
    else
    {
    var embed=`https://www.youtube.com/embed/${props.video.id.videoId}`
    return <div>
    <div>
        <div className='video-container'>
            <iframe title='video-player' src={embed} width="800" height="350" ></iframe>
        </div>
        <div className='card'>
        <h3>{props.video.snippet.title}</h3>
        <p>{props.video.snippet.description}</p></div>
    </div>
    </div>}
}
export default VideoDetail