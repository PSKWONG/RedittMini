//Import External Modules
import ReactMarkdown from 'react-markdown';

//Import Internal Modules 
import styles from './comment.module.css';
import ReplyContainer from  '../../../../container/postDisplay/postDetail/reply/replyContainer'; 


const CommentComponent = (props) => {

    //Extract Information from props
    const { data } = props;
    const { commentList } = data;

    //Constrcuting Comment Content 
    let commentContent = <></>;

    if ((commentList ?? []).length !== 0) {

        commentContent = commentList.map((comment) => {
            const { id, author, duration, body, reply } = comment

            //Checking 
            //console.log(`Reply Data: ${JSON.stringify(reply , 0, 2)}`)

            return (
                <div className={styles.comment} key={`${author}_${id}`}>
                    <div className={styles.header}>
                        <span> <strong> {author} </strong> </span>
                        <span>&#8226;</span>
                        <span>{duration} ago</span>
                    </div>
                    <div className={styles.body}>
                        <ReactMarkdown >{body}</ReactMarkdown>
                    </div>
                    <ReplyContainer data={reply} />
                </div>
            )
        })

    } else {
        commentContent = <>There is no comment to display. </>
    }

    return (
        <div className={styles.commentContainer}>

            {commentContent}

        </div>
    )


};

export default CommentComponent; 