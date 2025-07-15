import React from 'react'; 

/********* Import External Component ********/
import {useDispatch, useSelector } from 'react-redux';



/********* Import Internal Component ********/
import PostListComponent from './PostListComponent'; 
import usePageInfoController from './usePageInfoController';
import usePostPageListController from './usePostListController'; 
import menuDB from '../../container/root/data/subreddit.json'; 

const PostDisplayContainer = React.memo(()=>{

    //Page Info Handler
    const pageInfoController = usePageInfoController(menuDB[0]); 

    const postListController = usePostPageListController(); 
    
    return <PostListComponent 
        pageInfo = {pageInfoController.pageInfo}
        postList = {postListController}
    />
})

export default PostDisplayContainer; 