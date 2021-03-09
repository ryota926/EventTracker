import axios from 'axios' //use to make API calls
const url = 'http://localhost:5000/posts'

export const fetchPosts = () => axios.get(url)

export const createPost = (newPost) => axios.post(url, newPost); //takes in data(newPost)
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
export const deletePost = (id) => axios.delete(`${url}/${id}`)