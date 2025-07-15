import React from 'react'; 
import Commentcontainer from '../../container/comment/commentContainer'; 

const ReplyComponent = React.memo((props)=>{

    //Data Extraction
    const { control, replyData } = props;
    
    //Reply Control 
    const {status, command } = control.data; 
    const {isExpand, isVisible } = status ; 

    //Reply Component 
    return (
        <>
            {
                isVisible  &&
                <button onClick={control.action}> {command} </button>
            }
            {
                (isVisible && isExpand ) &&
                < Commentcontainer data={replyData} />
            }
        </>
    )


}); 

export default ReplyComponent; 

// <Commentcontainer data={data}/>