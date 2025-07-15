import { useState, useEffect, useRef } from 'react';

import {extractInformation} from './commentUtilies'; 



const useCommentController = ({ postID, data}) => {

    const [commentList, setCommentList] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 
    let moreCommentData = useRef(null);
    let commentMap = useRef(new Map());
    
    //Fetch default Comment Data
    useEffect(() => {

        console.log("Passed Post ID - Hook ", postID); 
        console.log("Passed Comment data  - Hook ", data); 

        //Helper function on updating the State
        const updateState= ({t1Map, moreMap})=>{
            commentMap.current = t1Map ; 
            moreCommentData.current = moreMap; 
            setCommentList([...t1Map.values()]); 
            setIsLoading(false); 
        }
        
        //Helper function on fetch and update RAW comment data 
        const fetchRawCommentData = async () => {
            const fetchURL = `https://www.reddit.com/comments/${postID}.json`;

            console.log("URL", fetchURL )

            try {
                let response = await fetch(fetchURL);
                response = await response.json();

                //The comment located at the second object of the response
                response = response[1].data.children

                console.log("Response", response )

                //Extract information 
                const extractedInfo = extractInformation(response); 

                //set the array of data into the state 
                updateState(extractedInfo); 

            } catch (error) {
                console.log("Fail to retrieve the comment of post id of ", postID);
                throw error;
            }
        }

        //Helper function on fetch and update RAW comment data 
        const extractReplyData = (data)=>{
            const extractedInfo = extractInformation(data); 

            //set the array of data into the state 
            updateState(extractedInfo); 
        }


        //Determine which function should execute depends on the source of data
        if (postID) {
            fetchRawCommentData();
        }else if(data){
            extractReplyData(data);
        }

        //return setIsLoading(true); 

    }, [postID, data])


    //Testing function 
    useEffect(() => {
        console.log('Update on raw comment data', commentList);
    }, [commentList])



     return {commentList, isLoading} ;

}

export default useCommentController; 