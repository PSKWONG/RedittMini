////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import React from "react";
//------------------------Import Internal Componenet ----------------------
import style from "./mediaPlayer.module.css"

export function ThumbnailContainer(props) {

    const { thumbnail,is_video } = props.mediaInfo;
    if(is_video ===true){
        return 
    }

    switch (thumbnail) {
        case "default":
            return

        case "self":
            return

        case "image":
            return

        default:
            return (
                <div className={style.thumbnailContainer}>
                    <img src={thumbnail} alt="thumbnail" />
                </div>
            )

    }

}