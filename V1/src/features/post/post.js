////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import { useDispatch } from 'react-redux';
//------------------------Import Internal Componenet ----------------------
import style from './post.module.css'
import { VideoPlayer } from "../../component/mediaPlayer/videoPlayer";
import { ThumbnailContainer } from "../../component/mediaPlayer/thumbnail";
import { displayComment, fetchComment } from '../comment/commentSlice';
import { useNavigate } from 'react-router-dom';
import { timeCount } from '../../component/root/timeCount';
import { useEffect } from 'react';



export function Post(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { title, media, over_18, is_video, author, created, num_comments, thumbnail, permalink } = props.data

    const mediaInfo = {
        is_video,
        media,
        thumbnail
    }
   
    const handlePostClick = (event) => {
        event.preventDefault();
        dispatch(displayComment(timeCount(created)));
        dispatch(fetchComment(permalink));
        navigate('/comment')

    }
    useEffect(()=>{
        navigate("/")
    },[])

    if (over_18 === false) {
        return (
            <div className={style.poscontainer} onClick={handlePostClick}>
                
                <h2> {title} </h2>
                <ThumbnailContainer mediaInfo={mediaInfo} />

                <VideoPlayer mediaInfo={mediaInfo} />
                <div className={style.extradata}>
                    Posted by <strong> {author} </strong>
                    <span className={style.divider}> &#8226;</span>
                    {timeCount(created)} ago
                    <span className={style.divider}> &#8226;</span>
                    {num_comments} comment

                </div>
            </div>
        );
    } else {
        return <></>
    }
}