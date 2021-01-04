import React from 'react';
import Post from './Post/Post';

import useStyles from './styles';

//what is react fragments?
const Posts = () =>{
    const classes = useStyles();
    return (
        <>
        <h1 className={classes.something}>Posts</h1>
        <Post />
        <Post />
        </>
    );
}

export default Posts;