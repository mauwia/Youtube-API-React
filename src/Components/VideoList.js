import React from 'react'
import VideoItem from './VideoItem'


const VideoList =props=>{
    let renderVideos=props.videos.map( video =>{
        return <VideoItem video={video} key={video.id.videoId} onSubmitVideo1={props.onSubmitVideo}/>
    })
    return <ul className='collection'>{renderVideos}</ul>
}

export default VideoList