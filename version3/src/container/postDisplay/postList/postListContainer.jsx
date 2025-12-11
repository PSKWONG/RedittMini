//Import External Modules 
import { useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

//Import Internal Modules 
import useURLParameter from '../hook/useURLParameter';
import useRedditData from '../hook/useReditData';
import usePostListFilter from '../hook/usePostListFilter';
import PageComponent from '../../../component/postDisplay/postList/postListComponent';
import LoadingComponent from '../../../component/master/loading/loading';
import { MasterContext } from '../../../container/master/data/masterContext';
import PostComponent from '../../../component/postDisplay/PostComponent';

const PostListContainer = () => {

    //Hook ACtions 
    //const navigate = useNavigate();

    //Extract Master Page Conext 
    const masterPageData = useContext(MasterContext).pageInfoData;
    const { actions } = masterPageData;
    const { setPageDetail } = actions;

    /* Get information from the URL */
    const { type, keyword } = useURLParameter();

    /* Get Page Data from the URL */
    const { isLoading, pageData } = useRedditData(type, keyword);

    /* Filter out information for displaying */
    const postListData = usePostListFilter(pageData);

    //Post Content 
    const navigate = useNavigate();
    const postListContent = useMemo(() => {

        if (postListData && postListData?.length !== 0) {



            return postListData.map((post) => {

                const detailAction = (event) => {
                    event.preventDefault();
                    setPageDetail(post);
                    navigate('/detail');
                }

                return <PostComponent key={post.id} data={post} action={detailAction} />
            });
        } else {
            return <>No post can be found</>
        }

    }, [postListData, setPageDetail, navigate])


    //Checking 
    //console.log(`Page loading : ${isLoading}`);
    //console.log(`Page Data : ${JSON.stringify(pageData, 0, 2 )}`); 
    //console.log(`Page Listing Data : ${JSON.stringify(postListData, 0, 2)}`);

    //Exported Data 
    const exportedData = {
        postListContent
    }

    return (
        <>
            {isLoading && <LoadingComponent />}
            {!isLoading && <PageComponent data={exportedData} />}

        </>
    )


};

export default PostListContainer; 