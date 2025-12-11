
//Import Internal Modules 
import './pageInfo.css';
import './postList.css'; 

const PostListComponent = (props)=>{

    /*
    const {pageInfo} = props; 
    */
    
    //Extract information from props
    const {data} = props; 
    const {postListContent} = data; 


    return (
        <>
            <div className={`postListWrapper`}>
                {postListContent}
            </div>
        </>
    )
}

export default PostListComponent; 

/*
{
    (pageInfo.pageIcon && pageInfo.pageName)
    &&
    <div className={`pageInfoWrapper`}>
        <div>
            <img src={pageInfo.pageIcon} alt={pageInfo.pageName} />
            <span>{pageInfo.pageName}</span>
        </div>
    </div>

}
*/
