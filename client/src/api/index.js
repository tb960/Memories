import axios from 'axios';

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
//is there any error handling function?
