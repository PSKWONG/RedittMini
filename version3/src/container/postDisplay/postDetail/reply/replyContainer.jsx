
//Import from external Modules 
import { useState } from 'react';

//Import Internal Modules 
import ReplyComponent from '../../../../component/postDisplay/postDetail/reply/replyComponent'; 

const ReplyContainer = (props) => {

    //Extract information from props
    const replyData = props.data;
    const isEmpty = (replyData ?? []).length === 0 ; 

    //Rendering Control 
    const [isVisible , setIsVisible] = useState(false); 
    const handleVisibility = (event)=>{

        event.preventDefault(); 

        setIsVisible((prev)=> !prev); 
    }

    //Exported Data 
    const exportedData = {
        replyData,
        isVisible
    }

    //Exported Actions 
    const exportedActions ={
        handleVisibility
    }

    return (
        <>
            { isEmpty && <></>}
            { !isEmpty && <ReplyComponent data={exportedData} actions={exportedActions}/>}
        </>
    )

}

export default ReplyContainer; 