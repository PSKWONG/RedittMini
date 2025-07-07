////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import React, { useEffect, useState } from "react";
//------------------------Import Internal Componenet ----------------------
import headerStyle from './header.module.css'
import { SearchingComponenet } from "../../features/searching/search";
import subreddit from '../../data/subreddit.json'
import { SubRedditIcon } from "./headerIcon"




export function HeaderComponent() {

    const iconListLength= subreddit.data.length

    const [iconVisibilityList, setIconVisibilityList] = useState([])
    const [styleOfLeftArrowButton] =useState(`${headerStyle.arrowBtn}`)
    const [refresh ,setRefresh] =useState(false)

    /*
    const countSpecificItem = (term)=>{
        return iconVisibilityList.filter(visibility => visibility = term).length
    }

*/

    useEffect(()=>{
        const target = iconListLength
        const current = iconVisibilityList.length
        if(current < target){
            setIconVisibilityList((prev)=>[...prev, true])
        } 
    },[iconVisibilityList,iconListLength])

  

    const handleLeftArrow = ()=>{
        const indexToChange = iconVisibilityList.indexOf(true);
        let newIconVisibilityList = iconVisibilityList;
        newIconVisibilityList[indexToChange]= false;
        
        setIconVisibilityList( newIconVisibilityList );
        setRefresh(!refresh)
    }

    const handleRightArrow = ()=>{
        const indexToChange = iconVisibilityList.lastIndexOf(false);
        let newIconVisibilityList = iconVisibilityList;
        newIconVisibilityList[indexToChange]= true;
        
        setIconVisibilityList( newIconVisibilityList );
        setRefresh(!refresh)
    }


    


    return (
        <div className={headerStyle.headerwrapper}>
            <div className={headerStyle.logoBtn} >
                <span className={headerStyle.RedditTitle}>Reddit</span>Minimal
            </div>
            <SearchingComponenet className={headerStyle.searchingWrapper} />
            <div className={headerStyle.redditSliderWrapper}>
                <img src="./media/image/arrowleft.png" className={styleOfLeftArrowButton} onClick={handleLeftArrow} alt="Moving Left"/>
                <div className={headerStyle.iconList} >
                    {
                        iconVisibilityList.map((item, index) => {
                            return < SubRedditIcon key={index} position={index} visibility={item} refresh={refresh} />
                        })
                    }
                </div>
                <img src="./media/image/arrowright.png" className={headerStyle.arrowBtn} onClick={handleRightArrow} alt="Moving Right" />
            </div>
        </div>
    )
}

