import axios from 'axios'

// const KEY='AIzaSyBWW30UzrO8MDTbc2tgcx2oKuI56Ibs1mM'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    // params:{
    //     part :'snippet',
    //     maxResult:'5',
    //     key:KEY
    // }
})