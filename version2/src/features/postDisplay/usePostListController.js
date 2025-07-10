
/********* Import External Component ********/
import { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

/********* Import Internal Component ********/
import { selectPagePost, selectPageLoading } from './postSlice';
import { updatePostDetail, fetchPages } from './postSlice';
import { timeCount, sanitizeRedditUrl } from './postUtilities';


const usePostPageListController = () => {
    const [postList, setPostList] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    /******************Get information from the URL ******************** */
    const { keyword } = useParams();
    const location = useLocation();

    const type = location.pathname.startsWith('/searching') ? 'searching' : 'Page';

    useEffect(() => {
        if (keyword) {
            dispatch(fetchPages({ type, keyword }));
        }
    }, [type, keyword, dispatch]);


    // Effect Hook on extrating the postList 
    const postListDB = useSelector(selectPagePost);

    useEffect(() => {

        if (postListDB.length !== 0) {
            const newPostListDB = postListDB.map((post) => {
                const { kind } = post;
                const { data } = post;
                return ({
                    //List Key 
                    id: data.id,
                    //Filter Creteria 
                    kind,
                    valid: !data.over_18,
                    //Content of the post  
                    title: data.title,
                    author: data.author,
                    duration: timeCount(data.created),

                    //Text Content
                    isText: data.is_self || false,
                    textContent: data.selftext || "",


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
            }).filter(({ valid }) => valid === true);

            setPostList(newPostListDB);
        }


    }, [postListDB])


    //Button Action for pressing the post 
    const handlePostDetailButton = (event, data) => {
        event.preventDefault();
        dispatch(updatePostDetail(data));
        navigate('/detail');
    }


    return {
        postList,
        pageLoading: useSelector(selectPageLoading),
        btnAction: handlePostDetailButton
    };


}



export default usePostPageListController; 