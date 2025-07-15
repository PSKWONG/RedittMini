import { useState, useRef, useCallback, useLayoutEffect, useEffect } from 'react';
import {useDispatch} from 'react-redux'; 

/******************Import Internal Data ********************** */
import menuData from './data/subreddit.json';
import {updatePageInfo} from '../../features/postDisplay/postSlice'; 
import {useNavigate} from 'react-router-dom'

const useMenuController = () => {

    const [menuList, setMenuList] = useState(menuData);
    const [isOverflow, setIsOverFlow] = useState(false);
    const removedList = useRef([]);
    const menuDOM = useRef(null)
    const dispatch = useDispatch(); 
    const navigate = useNavigate(); 


    /*************************************** Arrow Control ************************** */
    //Helper function on checking the Overflow Status 
    const checkingOverflow = (DOM) => {
        return DOM.scrollWidth > DOM.clientWidth
    }

    //Helper function to initate a oberver
    const observer = new ResizeObserver((entries) => {
        for (let entry of entries) {
            setIsOverFlow(checkingOverflow(entry.target))
        }
    });

    //Check the overflow status before the rendering 
    useLayoutEffect(() => {

        if (checkingOverflow(menuDOM.current)) {
            setIsOverFlow(true);
        }

        return setIsOverFlow(false);
    }, []);

    //Checking the overflow status when size changing
    useEffect(() => {
        if (menuDOM) {
            observer.observe(menuDOM.current);
        }

        return () => observer.disconnect();

    }, [observer]);

    /****************************************** Menu Items ************************** */
    
    const menuListItems = useCallback(() => {

       
        if (menuList.length === 0) {
            return [];
        }

        const menuItems = menuList.map(({ name, icon , keyword}, index) => {

             //Helper function on Change the page 
            const handleChangePage =(event)=>{
                event.preventDefault(); 
                dispatch(updatePageInfo({name,icon})); 
                navigate(`/page/${keyword}`);
            }

            return (
                <li key={index} onClick={handleChangePage}>
                    <img src={icon} alt={name} />
                    <span>{name}</span>
                </li>
            )
        })

        return menuItems;


    }, [menuList, dispatch, navigate])

    useEffect(() => {
        const menuItemAligment = () => {

            if (isOverflow) {
                menuDOM.current.style.setProperty('--aligment', 'start');
            } else {
                menuDOM.current.style.setProperty('--aligment', 'center');
                setMenuList(menuData); 
                removedList.current = []; 
            }
        }

        menuItemAligment();

    }, [isOverflow]);



    /************** Button Actions ******************** */
    const handleLeftArrow = (event) => {
        event.preventDefault();

        if (menuList.length > 1) {

            //Get the current list 
            let currentList = [...menuList];
            const removedItem = currentList.shift();

            //Update the removedItems
            removedList.current.push(removedItem);

            //Update the MenuList 
            setMenuList(currentList);
        }
    }

    const handleRightArrow = (event) => {
        event.preventDefault();

        if (removedList.current.length !== 0) {
            //Get the current list 
            const AddedItem = removedList.current.pop();

            //Update the removedItems
            let currentList = [AddedItem, ...menuList]

            //Update the MenuList 
            setMenuList(currentList);
        }

    }

    /************** Export Control as an Object  ******************** */
    const menuControl = {
        menuList: {
            overflow: isOverflow,
            data: menuListItems(),
            reference: menuDOM
        },
        arrowLeft: {
            action: handleLeftArrow
        },
        arrowRight: {
            action: handleRightArrow
        }
    }


    return menuControl;

}

export default useMenuController; 