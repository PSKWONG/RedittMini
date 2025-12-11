/********Import External Component *********** */
import React from 'react';
import ReactMarkdown from 'react-markdown';

/********Import Internal Component *********** */
import './postDetail.css';
import postStyles from '../post.module.css';
import MediaPlayerCompenet from  '../mediaDisplay/MeidaPlayerComponent'; 
import CommentCopnent from '../../../container/postDisplay/postDetail/comment/commentContainer';  

const PostDetailComponent = React.memo((props) => {

    //Data Extraction 
    const { postData, commentData } = props.data

    const { title, author, duration, numOfComment , isText, textContent} = postData
   
    return (
        <div className={`postDetailWrapper`}>

            <div className={`postDetail`}>
                <h2> {title} </h2>
                <div className={`${postStyles.extradata}`}>
                    <span>Posted by <strong> {author} </strong> </span>
                    <span>&#8226;</span>
                    <span>{duration} ago</span>

                </div>
                <div>
                    <MediaPlayerCompenet data={postData} />
                    {
                        isText
                        &&
                        <ReactMarkdown>
                            {textContent}
                        </ReactMarkdown>
                    }
                </div>

            </div>

            <div className={`commentWrapper`}>
                <div className={`header`}>
                    <h1> Comment </h1>
                    <span>There are <strong>{numOfComment} </strong> comment</span>
                </div>
                <CommentCopnent data={commentData} />
            </div>


        </div>
    )
})

export default PostDetailComponent;

/*
<CommentContainer postID={id}/>; 
*/