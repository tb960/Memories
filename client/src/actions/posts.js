import * as api from '../api';

//why some need default some do not need?
//since the getPost function is asynchronous, so we need to use redux thunk
//redux thunk is that we create a function that can return a function and we can pass a function inside
export const getPost = () => async (dispatch) => {
    try{
        const { data } = await api.fetchPosts();

        const action = {
            type: 'FETCH_ALL',
            payload: data
        }
        dispatch(action);

    }catch(error){
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try{
        const { data } = api.createPosts(post);

        const action =  {
            type: 'CREATE',
            payload: data
        }
        dispatch(action);
    }catch(error){
        console.log(error);
    }
}

