//Import External Modules 
import { useState, useEffect } from 'react';

const useReditCommentData = (postId) => {

    //Lodaing Status 
    const [isLoading, setIsLoading] = useState(false);
    const [commentData, setCommentData] = useState(null);

    //Get the information from server 
    useEffect(() => {

        if( !postId ){
            return; 
        }

        const getCommentData = async () => {

            //Set the Loading Status 
            setIsLoading(true);

            //Fetch through netlify function 
            const response = await fetch(`/.netlify/functions/redditComment?id=${postId}`);
            const json = await response?.json();

            //Checking
            //console.log(`Fetched Comment Data: ${JSON.stringify(json, 0, 2)}`)

            setCommentData(json);
            setIsLoading(false);

        }

        getCommentData();


    }, [postId])

    return {isLoading, commentData}; 

}

export default useReditCommentData; 