//Import External  modules 
import { useMemo } from 'react';

//Import Internal Modules
import {timeCount, sanitizeRedditUrl} from '../helper/postHelper'; 

const usePostListFilter = (pageData) => {

    //Extract information from pageData
    //const [postListData , setPostListData] = useState(null); 

    const postListData = useMemo(() => {

        if (pageData && pageData?.length !== 0) {

            return pageData.map((post) => {
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

        }

    }, [pageData]); 

    return postListData ; 

};

export default usePostListFilter; 