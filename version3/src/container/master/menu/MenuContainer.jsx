
//Import External Modules 
import { useState, useRef, useLayoutEffect } from 'react';


//Import Internal Modules 
import MenuComponent from '../../../component/master/menu/MenuComponent';
import menuItems from '../data/subreddit.json';



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
                console.log(`Overflow Status: ${menuWrapperScrollingWidth.current > menuWrapperDOM.current.clientWidth}`)
            }

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
    const [menuList, setMenuList] = useState([...menuItems]);
    const removedList = useRef([]);

    const handleLeftArrow = (event) => {
        event.preventDefault();

        setMenuList((prev) => {

            let currentList = [...prev];

            if (currentList.length > 1) {
                const removedItem = currentList.shift();
                removedList.current.push(removedItem);
            }

            return currentList;

        })

    };

    const handleRightArrow = (event) => {
        event.preventDefault();

        setMenuList((prev)=>{

            if (removedList.current.length !== 0){

                const AddedItem = removedList.current.pop();
                
                return [AddedItem, ...prev];

            }else{

                return prev;

            }
        })

    }





    //Exported Data 
    const exportedData = {
        menuWrapperDOM,
        isOverflow,
        menuList
    }

    const exportedActions = {
        handleLeftArrow,
        handleRightArrow
    }


    return <MenuComponent data={exportedData} actions={exportedActions} />

};

export default MenuContainer; 