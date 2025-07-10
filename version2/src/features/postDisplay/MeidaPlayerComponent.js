import React from 'react'; 
import styles from './post.module.css'; 

const MediaPlayerCompenet = (props)=>{
    
    // Extract the content 
    const {isMedia, postType, media} = props.data; 

    //Default value for Media Player 
    let content = <></>; 

    //conditional Rendering for "Video" & "Image"
    if(postType?.includes('video') && isMedia){
        content = <video src={media} controls/>
    }else if(postType?.includes('image') && isMedia){
        content = <img src={media} alt="Gallery of images" /> ;
    }

    return (
        <div className={styles.mediaWrapper}>
            {content}
        </div>
    )
}

export default MediaPlayerCompenet; 