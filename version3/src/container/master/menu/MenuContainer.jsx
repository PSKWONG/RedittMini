
//Import External Modules 
import { useState, useRef, useLayoutEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';


//Import Internal Modules 
import MenuComponent from '../../../component/master/menu/MenuComponent';
import menuInfo from '../data/subreddit.json';
import { MasterContext } from '../data/masterContext';



const MenuContainer = () => {

    //Get the DOM information 
    const menuWrapperDOM = useRef(null);
    const menuWrapperScrollingWidth = useRef(null);

    //Overflow Status 
    const [isOverflow, setIsOverflow] = useState(false);
    useLayoutEffect(() => {

        menuWrapperScrollingWidth.current = menuWrapperDOM.current.scrollWidth;

    }, [menuWrapperDOM])
    useLayoutEffect(() => {

        //Update overflow Status 
        const updateOverflowStatus = () => {

            const element = menuWrapperDOM.current;

            if (element) {
                setIsOverflow(menuWrapperScrollingWidth.current > menuWrapperDOM.current.clientWidth);
            }

            //Checking 
            //console.log(`Overflow Status: ${menuWrapperScrollingWidth.current > menuWrapperDOM.current.clientWidth}`)

            return;
        };

        //Invoke at loading 
        updateOverflowStatus();

        //Attach an windows Event Listerner 
        window.addEventListener('resize', updateOverflowStatus);

        //Clear the actions when unmount 
        return () => {
            window.removeEventListener('resize', updateOverflowStatus);
        }

    }, [])

    //Menu Items Control 
    const menuItems = menuInfo.filter((info) => info.page !== 'searching');
    const [menuList, setMenuList] = useState([...menuItems]);
    const removedList = useRef([]);

    const handMenuItems = (event) => {
        event.preventDefault();

        setMenuList((prev) => {

            let currentList = [...prev];

            if (event.target.id === "removeMenuItem" && currentList.length > 1) {
                const removedItem = currentList.shift();
                removedList.current.push(removedItem);
                return currentList;

            } else if (event.target.id === "addMenuItem" && removedList.current.length !== 0) {

                const AddedItem = removedList.current.pop();

                return [AddedItem, ...prev];
            } else {
                return currentList;
            }
        })

    }

    useLayoutEffect(() => {
        setMenuList((prev) => {

            if (!isOverflow) {
                return [...menuItems];
            }
            return [...prev];
        })
    }, [isOverflow])

    //Menu Item Content  
    const { setPageReference } = useContext(MasterContext).pageInfoData.actions;
    const navigate = useNavigate();
    const menuItemContent = menuList.map((item) => {

        //Information from Item 
        const { name, icon, keyword } = item;

        const clickingAction = (event) => {
            event.preventDefault();
            setPageReference(keyword);
            navigate(`/page/${keyword}`); 
        }

        return (
            <li key={keyword} onClick={clickingAction}>
                <img src={icon} alt={name} />
                <span>{name}</span>
            </li>
        )

    })


    //Exported Data 
    const exportedData = {
        menuWrapperDOM,
        isOverflow,
        menuItemContent
    }

    const exportedActions = {
        handMenuItems
    }


    return <MenuComponent data={exportedData} actions={exportedActions} />

};

export default MenuContainer; 