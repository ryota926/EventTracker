import axios from 'axios' //use to make API calls
const url = 'http://localhost:5000/posts'

export const fetchPosts = () => axios.get(url)

 