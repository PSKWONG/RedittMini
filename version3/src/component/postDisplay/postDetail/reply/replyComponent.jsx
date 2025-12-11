
//Import Internal Moudles 
import CommentComponent from '../../../../container/postDisplay/postDetail/comment/commentContainer';
import styles from '../comment/comment.module.css'; 

const ReplyComponent = (props) => {

    //Extraction information from props
    const { data, actions } = props;
    const { isVisible, replyData } = data;
    const { handleVisibility } = actions

    return (
        <>
            <button onClick={handleVisibility} className={`${isVisible? `${styles.hide}` : ""} `}> {isVisible? "Hide Replies" : "Show Replies"} </button>
            {isVisible && < CommentComponent data={replyData} />}
        </>
    )

};

export default ReplyComponent; 