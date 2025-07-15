////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import React, { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
//------------------------Import Internal Componenet ----------------------
import style from "./reply.module.css"
import { timeCount } from "../root/timeCount";
import { RepliesWrapper } from "./replyWrapper";
import { generateString } from "../root/randomCharGenerator";

export function ReplyComponent(props) {

    const { displayLv, replyData } = props.replyContainerInfo;
    const { author, created, body, replies, id } = replyData;
    const [nextDisplayLv] = useState(displayLv + 1)
    const [newWrapperkeyID] = useState(`${id}&&${nextDisplayLv}}%%${generateString(6)}`);


    const [replyBtnDisplay, setReplyBtnDisplay] = useState("")
    const [replyBtnStyle, setReplyBtnStyle] = useState(`${style.replyBtnHidden}`)
    const [repliesCount, setRepliesCount] = useState(0);
    const [repliesData, setRepliesdata] = useState("");



    useEffect(() => {


        const realRepliesCount = () => {
            const lastIndexToCheck = replies.data.children.length - 1
            const lastIndexItemType = replies.data.children[lastIndexToCheck].kind
            if (lastIndexItemType === "more") {
                return lastIndexToCheck
            } else {
                return replies.data.children.length
            }
        }

        if (replies !== "" && realRepliesCount() !== 0) {
            setRepliesCount(realRepliesCount())
            setReplyBtnDisplay(false)
            setRepliesdata(replies.data)
        }
    }, [replies])

    useEffect(() => {
        if (replyBtnDisplay === false) {
            setReplyBtnStyle(`${style.inActiveReplyBtn} ${style.replyBtn} `)
        } else if (replyBtnDisplay === true) {
            setReplyBtnStyle(`${style.activeReplyBtn} ${style.replyBtn} `)
        } else {
            setReplyBtnStyle(`${style.replyBtnHidden}`)
        }

    }, [replyBtnDisplay])

    const handleReplyBtnClick = () => {
        if (replyBtnDisplay === false) {
            setReplyBtnDisplay(true)
        } else {
            setReplyBtnDisplay(false)
        }
    }

    const replyWrapperInfo = {
        id,
        numReplies: repliesCount,
        repliesData: repliesData,
        display: replyBtnDisplay,
        displayLv: nextDisplayLv,
    }
    return (

        <>
            <div className={style.basicInfo}>
                <strong>{author}</strong>
                <span className={style.divider}> &#8226;</span>
                {timeCount(created)} ago :
                <div className={style.replyContent}>
                    <ReactMarkdown >{body}</ReactMarkdown>

                    <div className={style.buttonWrapper} >
                        <span className={replyBtnStyle} onClick={handleReplyBtnClick}>{repliesCount} Replies</span>
                    </div>
                    < RepliesWrapper key={newWrapperkeyID} replyWrapperInfo={replyWrapperInfo} />

                </div>

            </div>
        </>

    )
}