import { useState, useEffect, useRef } from 'react';

import { timeCount } from '../../features/postDisplay/postUtilities';


const useCommentController = ({ postID, data}) => {

    const [commentList, setCommentList] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 
    let moreCommentData = useRef(null);
    let commentMap = useRef(new Map());
    
    //Fetch default Comment Data
    useEffect(() => {

        console.log("Passed Post ID - Hook ", postID); 

        
        
        //Helper function on extracting information 
        const extractInformation = (list) => {

            if (list.length === 0) {
                return
            }

            //Extract response Data
            list.forEach(({ kind, data }) => {
                if (kind === 't1') {
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
                    commentMap.current.set(data.id, extratedData)
                } else if (kind === 'more') {
                    moreCommentData.current = data;
                }
            })

            //Set the commentList for data rendering
            setCommentList([...commentMap.current.values()]);
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
                extractInformation(response); 

            } catch (error) {
                console.log("Fail to retrieve the comment of post id of ", postID);
                throw error;
            }
        }

        if (postID) {
            fetchRawCommentData();
        }else if(data){
            extractInformation(data);
        }

        return setIsLoading(true); 

    }, [postID, data])
    

    //Testing function 

    
    useEffect(() => {
        console.log('Update on raw comment data', commentList);
    }, [commentList])



     return {commentList, isLoading } ;

}

export default useCommentController; 