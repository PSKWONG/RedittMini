
/********* Import External Component ********/
import { useState, useEffect , useCallback, useMemo} from 'react'; 
import {useDispatch, useSelector } from 'react-redux';

/********* Import Internal Component ********/
import {fetchPages} from './postSlice'; 
import {selectPagePost, selectPageLoading} from './postSlice'; 
import {timeCount, sanitizeRedditUrl} from './postUtilities'; 


const usePostPageListController = ()=>{
    const [postList, setPostList] = useState([]); 


    const dispatch = useDispatch(); 


    /**** Default Post List  ***/
    useEffect(()=>{
        dispatch(fetchPages({type:'', keywords:'popular'})); 
    }, [dispatch]); 

    // Helper function on extrating the postList 
    const postListDB = useSelector(selectPagePost); 
    useEffect(()=>{

        const newPostListDB = postListDB.map((post)=>{
            const {kind} = post ; 
            const {data} = post; 
            return ({
                //Filter Creteria 
                kind,
                valid: !data.over_18,
                //Content of the post  
                title: data.title,
                author: data.author,
                duration: timeCount(data.created), 

                //Text Content
                isText: data.is_self || false,
                textContent : data.selftext || "",
                

                //Media Cotent
                isMedia: 
                    data.post_hint?.includes('video') ||  
                    data.post_hint?.includes('image') || false, 
                media: 
                    sanitizeRedditUrl(
                        data.media?.reddit_video?.fallback_url ||
                        data.media?.oembed?.thumbnail_url ||
                        data.media?.oembed?.html ||
                        data.preview?.images?.[0]?.source?.url 
                    ),
                postType: data.post_hint || null,

                //Comment 
                linkToComment: data.permalink || null,
                numOfComment: data.num_comments

            })
        }).filter(({valid})=> valid === true );
        
        setPostList(newPostListDB); 

    }, [postListDB])

    //Checking 
    useEffect(()=>{
        console.log('New Post List', postList )
    },[postList])


    return {
        postList,
        pageLoading: useSelector(selectPageLoading)
    }; 


}

export default usePostPageListController; 