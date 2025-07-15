////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import React from "react";
//------------------------Import Internal Componenet ----------------------
import style from "./mediaPlayer.module.css"


export function VideoPlayer(props) {
    const {is_video,media} = props.mediaInfo;
    

    if (is_video === false) {
        return (<div></div>)
    } else {
        const videoLink = media.reddit_video.fallback_url
        return (
            <div className={style.mediawrapper}>
                <video src={videoLink} className={style.videoPlayer} controls/>
            </div>
        )
    }
}