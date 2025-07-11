import React from 'react'; 

/********** Import from internal component************* */
import useCommentController from './useCommentController'; 
import CommentComponent from '../../component/comment/CommentComponent'; 

const CommentContainer = React.memo(({postID, data})=>{

    // Put data into the controller to get the list 
    const {commentList, isLoading } = useCommentController({postID, data}); 

    return(<CommentComponent list={commentList} isLoading={isLoading} />); 

}); 

export default CommentContainer; 