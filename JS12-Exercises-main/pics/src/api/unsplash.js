import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID umaR0VzUfBjwmqDZvAa6JDtyFU1TQqjLw769_wSZfzM'
    }
});