import axios from 'axios';

const KEY = 'AIzaSyCDHekDg6CFyZ8z4Izhajr6C6gEBiwW0Cg'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: '5',
        key: KEY,
    }
});