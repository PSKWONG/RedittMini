////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//------------------------Import Internal Componenet ----------------------
import style from './post.module.css'
import { fetchPages, selectPageInfo } from "./postSlice";
import { PostList } from "./postList";


export function PostWrapper(){

    const {pageName,pageIcon} = useSelector(selectPageInfo)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchPages('popular'))
    },[dispatch])

    return (
        <div className={style.postWrapper}>
            <div className={style.pageInfo}>
                <img src={pageIcon} alt={pageName} />
                {pageName}
            </div>
            <PostList />

        </div>
    );
}