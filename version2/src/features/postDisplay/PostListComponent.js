import React from 'react'; 

/********Import Internal Component *********** */
import styles from './post.module.css'; 
import LoadingComponent from  '../../component/app/Loading'; 
import PostComponent from './PostComponent'; 

const PostListComponent = (props)=>{

    const {pageInfo} = props; 
    const {postList} = props; 

    //Post Component 
    let postListContent; 

    if(postList?.postList?.length === 0){
        postListContent = <span>No post can be found</span>; 
    }else{
        postListContent = postList.postList.map((post)=>{
            return <PostComponent key={post.id} data={post} />          
        });
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
                <LoadingComponent condition={postList.pageLoading} />
                {postListContent}
            </div>
        </>
    )
}

export default PostListComponent; 
