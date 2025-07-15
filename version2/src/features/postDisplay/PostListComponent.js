import React from 'react'; 

/********Import Internal Component *********** */
import styles from './post.module.css'; 
import LoadingComponent from  '../../component/app/Loading'; 
import PostComponent from './PostComponent'; 

const PostListComponent = (props)=>{

    const {pageInfo} = props; 
    const {postList} = props; 
    const {pageLoading} = postList;
    const {btnAction} = postList;

    //Post Component 
    let postListContent; 

    if( postList?.postList?.length !== 0 && !pageLoading){
        postListContent = postList.postList.map((post)=>{
            return <PostComponent key={post.id} data={post} action={btnAction} />          
        });
    }else if(postList?.postList?.length === 0 && !pageLoading){
        postListContent = <span>No post can be found</span>;
    }else{
        postListContent = <></>
    }

    

    return (
        <>
            {
                (pageInfo.pageIcon && pageInfo.pageName)
                &&
                <div className={styles.pageInfoWrapper}>
                    <div>
                        <img src={pageInfo.pageIcon} alt={pageInfo.pageName} />
                        <span>{pageInfo.pageName}</span>
                    </div>
                </div>

            }

            <div className={styles.postListWrapper}>
                <LoadingComponent condition={pageLoading} />
                {postListContent}
            </div>
        </>
    )
}

export default PostListComponent; 
