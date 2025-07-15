import React from 'react'; 

/********** Import from internal component************* */
import useCommentController from './useCommentController'; 
import CommentComponent from '../../component/comment/CommentComponent'; 

//Comment Container get information either from postID or passedIn data
const CommentContainer = React.memo(({postID, data})=>{

    // Put data into the controller to get the list 
    const {commentList, isLoading, isReplyVisible } = useCommentController({postID, data}); 

    console.log("Reply Control", isReplyVisible )
    console.log("Reply data", data )

    return(<CommentComponent list={commentList} isLoading={isLoading} replyControl = {isReplyVisible} />); 

}); 

export default CommentContainer; 