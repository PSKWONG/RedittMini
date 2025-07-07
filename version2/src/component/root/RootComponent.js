import React from 'react'; 

/*********** Import Internal Modules ************** */
import './root.css'; 
import logo from './images/redditlogo.png'; 


const Root = ()=>{

    return(
        <>
            <div className="headerwrapper">
                <div className="logoWrapper">
                    <img src={logo} alt="Reddit Logo" />
                    <span>Reddit</span>
                    <span>Minimal</span>
                </div>
                <div className="searchingWrapper">Searching</div>
                <div className="menuWrapper">menu</div>
            </div>
            <div>
                content
            </div>
        </>
    )

}

export default Root; 