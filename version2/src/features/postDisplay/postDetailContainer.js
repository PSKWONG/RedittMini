
import {useEffect} from 'react'; 
import {useDispatch, useSelector } from 'react-redux'; 
import {useNavigate} from 'react-router-dom'; 


import { selectPostDetail } from './postSlice'; 
import PostDetailComponent from './PostDetailComponent'


const PostDetailContainer = ()=>{



    const {postData} = useSelector(selectPostDetail); 

    const navigate = useNavigate(); 

    useEffect(()=>{

        console.log(postData); 

        if(Object.keys(postData).length === 0){
            navigate('/'); 
        }
    },[postData, navigate]);

    return <PostDetailComponent data={postData} />
}

export default PostDetailContainer; 