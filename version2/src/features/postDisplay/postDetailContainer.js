import {useDispatch, useSelector } from 'react-redux'; 


import { selectPostDetail } from './postSlice'; 
import PostDetailComponent from './PostDetailComponent'


const PostDetailContainer = ()=>{

    const {postData} = useSelector(selectPostDetail); 

    return <PostDetailComponent data={postData} />
}

export default PostDetailContainer; 