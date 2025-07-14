import React from 'react'; 

import styles from './comment.module.css'; 
import ReactMarkdown from 'react-markdown';
import LoadingComponent from '../app/Loading'; 
import ReplyContainer from  '../../container/comment/replyContainer'; 


const CommentComponent = React.memo((props)=>{

    const {list, isLoading, replyControl}= props
    const isEmptyList = list.length === 0

    // Conditional Rendering 
    let commentContent =<></>;
    
    if(!isEmptyList){
        commentContent = (
            <div className={styles.commentContainer}>
                {
                    list.map((comment)=>{
                        const {id, author, duration, body, reply} = comment

                        return (
                            <div className={styles.comment} key={id}>
                                <div className={styles.header}>
                                    <span> <strong> {author} </strong> </span>
                                    <span>&#8226;</span>
                                    <span>{duration} ago</span>
                                </div>
                                <div className={styles.body}>
                                    <ReactMarkdown >{body}</ReactMarkdown>
                                </div>
                                <ReplyContainer replyData={reply} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    


    return (
        <>
            { isLoading && <LoadingComponent />}
            {commentContent}
        </>
        
    )

});

export default CommentComponent; 