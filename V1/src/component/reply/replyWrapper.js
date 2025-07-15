
////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import React, { useEffect, useState } from "react";
//------------------------Import Internal Componenet ----------------------
import style from "./reply.module.css"
import { ReplyComponent } from "./reply";
import { generateString } from "../root/randomCharGenerator";


export function RepliesWrapper(props) {

    const { id, numReplies, repliesData, display, displayLv } = props.replyWrapperInfo

    //const [replyListLength, setReplyListLength] = useState(numReplies);
    const [nextDisplayLv] = useState(displayLv + 1)
    const [newWrapperkeyID] = useState(`${id}&&${nextDisplayLv}}%%${generateString(6)}`);

    const [indexInterval] = useState(50)
    const [endIndex, setEndIndex] = useState(indexInterval)
    const [loadMoreBtn, setLoadMoreBtn] = useState(false)
    const [loadMoreBtnStyle, setLoadMoreBtnStyle] = useState(`${style.replyBtnHidden}`)


    useEffect(() => {
        if (numReplies < indexInterval) {
            setEndIndex(numReplies - 1)
        } else {
            setLoadMoreBtn(true)
        }
    }, [display, indexInterval, numReplies])

    useEffect(() => {
        if (loadMoreBtn === true) {
            setLoadMoreBtnStyle(`${style.replyBtnDisplay}`);
        } else if(loadMoreBtn === false){
            setLoadMoreBtnStyle(`${style.replyBtnHidden}`);
        }
    }, [loadMoreBtn])



    const handleMoreButton = () => {
        if (endIndex + indexInterval < (numReplies - 1)) {
            setEndIndex(endIndex + indexInterval)
        } else {
            setEndIndex(numReplies - 1)
            setLoadMoreBtn(false)
        }
    }


    if (display === true && numReplies > 0) {

        const replyList = repliesData.children

        return (
            <div className={style.replyWrapper}>
                {
                    replyList.map(({ data, kind }, index) => {
                        if (index <= endIndex && kind !== "more") {
                            const replyContainerInfo = {
                                displayLv: nextDisplayLv,
                                replyData: data,
                            }
                            return < ReplyComponent key={`${newWrapperkeyID}&&${index}`} replyContainerInfo={replyContainerInfo} />
                        }else{
                            return <></>
                        }
                    })
                }
                <div onClick={handleMoreButton} className={loadMoreBtnStyle}> Load more replies ...  </div>
            </div>
        );
    }
}
