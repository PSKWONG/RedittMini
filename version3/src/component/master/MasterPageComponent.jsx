
//Import External Modules
import { Outlet } from 'react-router-dom';

//Import Internal Modules 
import Menu from '../../container/master/menu/MenuContainer';
import Searching from '../../container/searching/searchingContainer'; 
import './master.css'; 
import './header.css';

const MasterPage = () => {

    return (
        <>
            <div className="headerwrapper">
                <div className="logoWrapper">
                    <img src={'/redditlogo.png'} alt="Reddit Logo" />
                    <span>Reddit</span>
                    <span>Minimal</span>
                </div>
                <div className="searchingWrapper">
                    <Searching />
                </div>
                <Menu />

            </div>
            <div className="contentContainer">
                <div className="contentWrapper">
                    <Outlet />
                </div>
            </div>
            
        </>
    )
};
export default MasterPage; 