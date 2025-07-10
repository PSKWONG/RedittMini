/********Import External Component *********** */
import React from 'react'; 

/********Import Internal Component *********** */
import styles from './post.module.css'; 
import MediaPlayerCompenet from './MeidaPlayerComponent'; 

const PostDetailComponent = React.memo(( props )=>{
    const {title, author, duration, numOfComment} = props.data 
    //Text Extraction 
    const {isText, textContent} = props.data
    //Comment Extraction
    const {linkToComment} = props.data

    return (
                <div className={styles.postWrapper}>
                    <h2> {title} </h2>
                    <div className={styles.extradata}>
                       <span>Posted by <strong> {author} </strong> </span>
                       <span>&#8226;</span>
                       <span>{duration} ago</span>
                       <span>&#8226;</span>
                       <span>{numOfComment} comment</span>
                    </div>

                    <div>
                        <MediaPlayerCompenet data={props.data}/>
                        {
                            isText
                            &&
                            <p>
                                {textContent}
                            </p>
                        }
                    </div>
                    <div>
                        Comment 

                    </div>

                    
                    
                    
                    
                </div>
            )   
})

export default PostDetailComponent; 