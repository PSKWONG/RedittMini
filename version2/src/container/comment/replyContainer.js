
import ReplyComponent from '../../component/comment/RepliesComponent'; 
import useReplyController from './useReplyController'; 


const ReplyContainer = ({replyData})=>{


    const replyController = useReplyController(replyData); 

    return < ReplyComponent  control={replyController} replyData = {replyData}  />
}

export default ReplyContainer; 