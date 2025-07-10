import React from 'react'; 
import { Outlet } from 'react-router-dom';

/*********** Import Internal Modules ************** */
import './root.css'; 
import logo from './images/redditlogo.png'; 
import arrowLeft from './images/arrowleft.png'; 
import arrowRight from './images/arrowRight.png'; 
import SearchingContainer from '../../container/searching/searchingContainer'; 



const Root = (props)=>{

    const isMenuOverflow = props.menu.menuList.overflow; 

    return(
        <>
            <div className="headerwrapper">
                <div className="logoWrapper">
                    <img src={logo} alt="Reddit Logo" />
                    <span>Reddit</span>
                    <span>Minimal</span>
                </div>
                <div className="searchingWrapper">
                    <SearchingContainer />
                </div>
                <div className="menuWrapper">
                    { isMenuOverflow && <img src={arrowLeft} alt="Move Left" className="slideIcon" onClick={props.menu.arrowLeft.action}/>}
                    <ul ref={props.menu.menuList.reference}>
                        {props.menu.menuList.data}
                    </ul>
                    {isMenuOverflow && <img src={arrowRight} alt="Move Right" className="slideIcon" onClick={props.menu.arrowRight.action} />}
                </div>
            </div>
            <div className="contentWrapper">
                <Outlet />
            </div>
        </>
    )

}

export default Root; 