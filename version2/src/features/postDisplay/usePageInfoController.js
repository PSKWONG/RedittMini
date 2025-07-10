import React, { useEffect , useCallback} from 'react'; 
import {useDispatch, useSelector } from 'react-redux';

/********* Import Internal Component ********/
import {updatePageInfo} from './postSlice'; 
import {selectPageInfo} from './postSlice' ; 

const usePageInfoController = (defaultData)=>{

    //Get the Page Info 
    const dispatch = useDispatch(); 

    //*******************Default PageInfo *************************/
    useEffect(()=>{
        //Construct Action object
         dispatch(updatePageInfo(defaultData));

    }, [defaultData, dispatch]); 


    return {
        pageInfo: useSelector(selectPageInfo)
    }
    
}; 

export default usePageInfoController; 