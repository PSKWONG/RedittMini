////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//------------------------Import Internal Componenet ----------------------
import style from './post.module.css'
import { Post } from "./post";
import { changePostList, selectPageLoading, selectPagePost } from "./postSlice";



export function PostList() {

    let pagePost = useSelector(selectPagePost);
    let LoadingStatus = useSelector(selectPageLoading);
    let dispatch = useDispatch()

    useEffect(()=>{
        dispatch(changePostList(0))
    },[dispatch])

    if (LoadingStatus === true) {
        return(
            <div>
                <img src="./media/image/loading-gif.gif" alt="Loading" width={"100px"} />
            </div>
        )
    } else if (pagePost.length !== 0) {
        return (
            
            <div className={style.postList}>
                {
                    pagePost.map((post) => {
                        const data = post.data;
                        const postID = data.id
                        return <Post data={data} key={postID} />
                    })
                }
            </div>
        )
    }

}

