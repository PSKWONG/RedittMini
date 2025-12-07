import { useState, useRef, useEffect } from 'react';

const useReplyController = (data) => {

    console.log("ReplyController", data )

    const [isExpand, setIsExpand] = useState(false);
    const [isVisible, setIsVisble] = useState(false);

    let validReplyCount = useRef(0);

    //Count the number of valid replies 
    
    useEffect(() => {

        data.forEach(({ kind }) => {
        if (kind === 't1') {
            validReplyCount.current += 1; 
        } 
    })

    }, [data])
    

    //Set the visible of the Reply component
    useEffect(()=>{

        if(validReplyCount.current > 0 ){
            setIsVisble(true);
        }else{
            setIsVisble(false); 
        }

    }, [validReplyCount]);

    //Testing 
     useEffect(()=>{

        console.log( "Repy Visible "  ,isVisible )

    }, [isVisible]);



    //Handle Expand Button Action 
    const handleExpandButton = (event) => {
        event.preventDefault();

        if (isExpand) {
            setIsExpand(false);
        } else {
            setIsExpand(true);
        }
    }

    return {
        data: {
            status: {isExpand, isVisible },
            command: isExpand ? "Hide Replies" : "Show Replies",
        },
        action: handleExpandButton
    }

}

export default useReplyController; 