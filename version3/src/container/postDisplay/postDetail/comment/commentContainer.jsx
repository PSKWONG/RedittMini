
//Import External Modules 
import React, { useState, useEffect } from 'react';

/********** Import from internal component************* */
import {timeCount} from '../../helper/postHelper'; 
import CommentComponent from  '../../../../component/postDisplay/postDetail/comment/CommentComponent'; 

//Comment Container get information either from postID or passedIn data
const CommentContainer = (props) => {

    //Extract Information from props
    const commentData = props?.data;

    //State for Comment Component 
    const [commentList , setCommentList] = useState([]); 
    const [moreCommentData, setMoreCommentData] = useState(null); // Further Handle the more comment retrieving 
    
    //Extracting Information 
    useEffect(()=>{

        //Checking for avaliability of comment data
        if (!commentData || commentData.length === 0) {
            return;
        }

        //Extract response Data
        commentData.forEach(({ kind, data }) => {
            if (kind === 't1') {

                //Extracting Data 
                const extratedData = (
                    {
                        // Identification
                        id: data.id,

                        //Comment
                        author: data.author,
                        body: data.body,
                        duration: timeCount(data.created),

                        //Replies
                        reply: data.replies?.data?.children ?? [],

                    }
                );

                setCommentList((prev)=>{

                    const prevList = [...prev]; 
                    const isDuplicated = prevList.filter((item)=> item.id === data.id ).length !== 0 ; 

                    if( isDuplicated ){
                        return [...prev]
                    }else{
                        return [...prev, extratedData]
                    }
                    
                    
                }); 

            } else if (kind === 'more') {
                setMoreCommentData(data)
            }
        });

    }, [commentData])

    //Exported Data 
    const exportedData = {
        commentList
    }

    return <CommentComponent data={exportedData} />

}

export default CommentContainer; 