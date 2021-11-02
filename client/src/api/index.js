import axios from 'axios';

const url = "http://localhost:5050/posts";

export const fetchPosts = () => axios.get(url);
//is there any error handling function?

export const createPosts = (newPost) => axios.post(url, newPost);
