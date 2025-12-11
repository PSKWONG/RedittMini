
//Import External Modules 
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

//Import Internal Modules 
import PostDetailComponent from '../../../component/postDisplay/postDetail/PostDetailComponent';
import { MasterContext } from '../../master/data/masterContext';
import useCommentData from '../hook/useReditCommentData'; 
import Loading from '../../../component/master/loading/loading'; 


const PostDetailContainer = () => {

    //Hook Actions
    const navigate = useNavigate();

    //Extract data from Master Page Context
    const { data } = useContext(MasterContext).pageInfoData;
    const postData = data?.pageDetail;

    //Extract Comment Data 
    const {isLoading, commentData} = useCommentData(postData?.id); 

    //Control Page Directing 
    useEffect(() => {

        //Checking: Without the Post Data, it will redirect to the index page
        if (!postData || Object?.keys(postData)?.length === 0) {
            navigate('/');
        }

    }, [postData, navigate]);

    //Exported Data 
    const exportedData = {
        postData,
        commentData
    }

    return (
        <>
            { isLoading &&   <Loading />}
            { (!isLoading && postData ) && <PostDetailComponent data={exportedData} />}
        </>
    )
            
        
}

export default PostDetailContainer; 