import React from 'react'
import SearchBar from './SearchBar'
import Youtube from '../API/Youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
const KEY='AIzaSyBWW30UzrO8MDTbc2tgcx2oKuI56Ibs1mM'

class App extends React.Component{
    state={videos:[],selectedVideo:null}
    componentDidMount(){
        this.onSubmitSearch('')
    }
    onSubmitSearch = async submitValue=>{
       let response= await Youtube.get('/search',{
            params:{
                part :'snippet',
                maxResult:'10',
                key:KEY,
                q:submitValue
            }
        })
       let data =await response.data.items
        this.setState({videos : data,
            selectedVideo:data[0]
        })
        // console.log(this.state.videos)
    }
    onSelectedVideo = video=>{
        this.setState({selectedVideo:video})
    }
    render(){
        return <div><SearchBar onSubmit={this.onSubmitSearch}/>
        <div className='row'>
            <div className='col s12 m6 l8'>
        <VideoDetail video={this.state.selectedVideo}/></div>
       <div className='col s12 l4 m6'><VideoList videos={this.state.videos} onSubmitVideo={this.onSelectedVideo}/></div>
       </div>
        </div>
    }
}


export default App