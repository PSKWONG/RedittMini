import React from 'react'; 

/*********** Import Internal Modules ************** */
import RootComponent from '../../component/root/RootComponent'; 
import useMenuController from './menuControl'; 



const RootContainer = ()=>{

    /* Menu Control*/
    const menuController = useMenuController();


    return ( 
            <RootComponent 
                menu={menuController}
                msg="hi"
            /> 
    ); 
}

export default RootContainer; 