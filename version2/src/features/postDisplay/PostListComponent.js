import React from 'react'; 

/********Import Internal Component *********** */
import styles from './post.module.css'; 
import LoadingComponent from  '../../component/app/Loading'; 

const PostComponent = (props)=>{

    const {pageInfo} = props; 
    const {postList} = props; 



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

                


            </div>
        </>
    )
}

export default PostComponent; 

/*


*/