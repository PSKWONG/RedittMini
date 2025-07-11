/********Import External Component *********** */
import React from 'react'; 
import ReactMarkdown from 'react-markdown';

/********Import Internal Component *********** */
import styles from './post.module.css'; 
import MediaPlayerCompenet from './MeidaPlayerComponent'; 
import CommentContainer from '../../container/comment/commentContainer'; 

const PostDetailComponent = React.memo(( props )=>{
    const {title, author, duration, numOfComment} = props.data 
    //Text Extraction 
    const {isText, textContent} = props.data
    //Comment Extraction
    const {id} = props.data

    console.log("Rendering Post Detail Page")

    return (
                <div className={styles.postDetailWrapper}>
                    
                    <div className={styles.postDetail}>
                        <h2> {title} </h2>
                        <div className={styles.extradata}>
                            <span>Posted by <strong> {author} </strong> </span>
                            <span>&#8226;</span>
                            <span>{duration} ago</span>
                            
                        </div>
                        <div>
                            <MediaPlayerCompenet data={props.data}/>
                            {
                                isText
                                &&
                                <ReactMarkdown>
                                    {textContent}
                                </ReactMarkdown>
                            }
                        </div>

                    </div>
                    
                    <div className={styles.commentWrapper}>
                        <div className={styles.header}>
                            <h1>"<span> Comment </span>"</h1>
                            <span>There are <strong>{numOfComment} </strong> comment</span>
                        </div>
                        
                        <CommentContainer postID={id}/>; 

                    </div>



                    
                    
                    
                    
                </div>
            )   
})

export default PostDetailComponent; 