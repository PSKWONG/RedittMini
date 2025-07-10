import React, { useEffect } from 'react'; 
import {useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';

/********* Import Internal Component ********/
import {updatePageInfo} from './postSlice'; 
import {selectPageInfo} from './postSlice' ; 
import menuDB from '../../container/root/data/subreddit.json'; 

const usePageInfoController = ()=>{

    const dispatch = useDispatch(); 

    /******************Get information from the URL ******************** */
    const { keyword } = useParams();
    const location = useLocation();

    const type = location.pathname.startsWith('/searching') ? 'searching' : 'Page';
    
        useEffect(() => {
            if (type === 'Page') {
                const pageInfoData = menuDB.filter((data)=>{return data.keyword === keyword })
                dispatch(updatePageInfo(pageInfoData[0]));
            }
        }, [type, keyword, dispatch]);


    return {
        pageInfo: useSelector(selectPageInfo)
    }
    
}; 

export default usePageInfoController; 