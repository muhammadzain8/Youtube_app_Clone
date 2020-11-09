import axios from 'axios'

const KEY='AIzaSyB7vjDHM86ooQ6RAstj3i7yKngy9mjaB0U'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:10,
        key:KEY,
    }
})
