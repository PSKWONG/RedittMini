/********Import External Component *********** */
import React from 'react'; 

/********Import Internal Component *********** */
import styles from './post.module.css'; 
import MediaPlayerCompenet from './MeidaPlayerComponent'; 

const PostComponent = React.memo(( props )=>{
    const {title, author, duration, numOfComment} = props.data ; 
    const handlePostDetailButton  = props.action; 


    return (
                <div className={styles.postWrapper} onClick={(event)=>{handlePostDetailButton(event, props.data)}}>
                    <h2> {title} </h2>
                    <div>
                        <MediaPlayerCompenet data={props.data}/>
                    </div>
                    <div className={styles.extradata}>
                       <span>Posted by <strong> {author} </strong> </span>
                       <span>&#8226;</span>
                       <span>{duration} ago</span>
                       <span>&#8226;</span>
                       <span>{numOfComment} comment</span>
                    </div>
                </div>
            )   
})

export default PostComponent; 