
import {useEffect} from 'react'; 
import { useSelector } from 'react-redux'; 
import {useNavigate} from 'react-router-dom'; 


import { selectPostDetail } from './postSlice'; 
//import { fetchComment } from './postSlice'; 
import PostDetailComponent from './PostDetailComponent'


const PostDetailContainer = ()=>{

    const navigate = useNavigate(); 

    //Get the Post Detail Data 
    const {postData} = useSelector(selectPostDetail); 

    //Render the detail at the start of the page 
    useEffect(()=>{

        console.log(postData); 

        //Checking: Without the Post Data, it will redirect to the index page
        if(Object.keys(postData).length === 0){
            navigate('/'); 
        }
             
    },[postData, navigate]);

    return <PostDetailComponent data={postData} />
}

export default PostDetailContainer; 