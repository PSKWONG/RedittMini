import { useEffect, useState } from "react"

import subreddit from '../../data/subreddit.json'

import style from "./header.module.css"
import { useDispatch } from "react-redux"
import { changePostList } from "../../features/post/postSlice"
import { useNavigate } from "react-router-dom"




export function SubRedditIcon(props){

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [iconStyle, setIconStyle] = useState(`${style.iconWrapper}`)

    
    const {position, visibility} = props
    const {icon, name} = subreddit.data[position]


    useEffect(()=>{
        
        if(visibility === true){
            setIconStyle(`${style.iconWrapper}`)
        }else if(visibility === false){
            setIconStyle(`${style.inactiveIconWrapper}`)
        }

    },[visibility])

   
    const handleOnClick=()=>{
        dispatch(changePostList(position));
        navigate("/")
    }


    return (
        <div onClick={handleOnClick} className={iconStyle}>
            <img src={icon} alt={name} />
            <span>{name}</span>
        </div>
    )
}