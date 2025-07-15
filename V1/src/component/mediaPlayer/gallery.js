////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import React from "react";
//------------------------Import Internal Componenet ----------------------
import style from "./mediaPlayer.module.css"

export function GalleryContainer(props) {
    const {is_video,url} = props.mediaInfo;

    const imageChecking = (input)=>{
        if(input !== ""){
            const result01 = input.match(/\w*.jpg/)
            const result02 = input.match(/\w*.jpeg/)
            if( result01 || result02){
                return true 
            }
        }else{
            return false
        }

    }
    

    if (is_video === true) {
        return <></>
    } else if (imageChecking(url)) {
        return (
            <img src={url} alt="Commentimage" className={style.imgContainer}/>
        )
    }
}