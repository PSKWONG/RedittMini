////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReactMarkdown from 'react-markdown';
//------------------------Import Internal Componenet ----------------------
import style from './comment.module.css'
import { VideoPlayer } from "../../component/mediaPlayer/videoPlayer";
import { selectCommentLoading, selectCommentPost, selectPostTimeCreated } from "./commentSlice";
import { GalleryContainer } from "../../component/mediaPlayer/gallery";
import { RepliesWrapper } from "../../component/reply/replyWrapper";
import { useNavigate } from "react-router-dom";
//import { HTMLConvertor } from "./htmlTextDisplayer";


export function CommentWrapper() {

    
    const fetchData = useSelector(selectCommentPost)
    const LoadingStatus = useSelector(selectCommentLoading);
    const TimeCreated = useSelector(selectPostTimeCreated)
    const [repliesDisplay, setRepliesDisplay] = useState(false); 
    const [replyButtonStyle, setReplyButtonStyle] = useState(`${style.commentButton} ${style.inactiveCommentButton}`); 
    const navigate = useNavigate()

    useEffect(()=>{
        if (fetchData.length === 0 && LoadingStatus === false){
            navigate("/")
        }

    },[fetchData.length, LoadingStatus, navigate])

    if (LoadingStatus === true) {
        return (
            <div>
                <img src="./media/image/loading-gif.gif" alt="Loading" width={"100px"} />
            </div>
        )
    } else if (fetchData.length !== 0) {

        const { title, is_video, media, url, author, num_comments, selftext , id} = fetchData[0].data.children[0].data;
        const replies = fetchData[1].data
        const nunberOfReplies = fetchData[1].data.children.length
        console.log(fetchData, 'Comment Wrapper');

        const mediaInfo = {
            is_video,
            media,
            url
        };
        const handleReplyButton = ()=>{
            if(repliesDisplay === true){
                setRepliesDisplay(false);
                setReplyButtonStyle(`${style.commentButton} ${style.inactiveCommentButton}`)
            }else{
                setRepliesDisplay(true);
                setReplyButtonStyle(`${style.commentButton}  ${style.activeCommentButton}`)
            }
            
            console.log(repliesDisplay)
        }

        const replyWrapperInfo = {
            id,
            numReplies: nunberOfReplies,
            repliesData: replies,
            display: repliesDisplay,
            displayLv: 0, 
        }

        return (
            <div className={style.commentContainer}>
                <h2> {title} </h2>
                <div className={style.extradata}>
                    Posted by <strong> {author} </strong>
                    <span className={style.divider}> &#8226;</span>
                    {TimeCreated} ago
                </div>

                < ReactMarkdown className={style.markdownWrapper} >{selftext}</ReactMarkdown>
                
                <VideoPlayer mediaInfo={mediaInfo} />
                <GalleryContainer mediaInfo={mediaInfo} />
                <div className={style.replyiesWrapper}>
                    <div className={replyButtonStyle} onClick={handleReplyButton}>
                        <span className={style.commentLogo}></span>
                        {num_comments} Comment 
                    </div>

                </div>
                <RepliesWrapper key={id} replyWrapperInfo = {replyWrapperInfo}/>


            </div>
        )
    }

}