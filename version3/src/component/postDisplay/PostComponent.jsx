//Import external Modules
import React from 'react';

//Import Internal Modules 
import styles from './post.module.css';
import MediaPlayerCompenet from './mediaDisplay/MeidaPlayerComponent'; 

const PostComponent = React.memo((props) => {
    const { title, author, duration, numOfComment } = props.data;


    return (
        
        <div className={styles.postWrapper} onClick={props.action}>

            <h2> {title} </h2>

            <div className={styles.postContentWrapper}>
                <MediaPlayerCompenet data={props.data} />
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

