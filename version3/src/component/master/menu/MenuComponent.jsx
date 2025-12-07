
//Import Internal Modules 
import './menu.css';
import arrow from './images/arrow.png';


const MenuComponent = (props) => {

    //Get props Data
    const { data, actions } = props;
    const { menuWrapperDOM, isOverflow } = data;
    const { handMenuItems } = actions;

    //Menu Items Content 
    const menuItems = data.menuList.map((item) => {

        //Information from Item 
        const { name, icon, keyword } = item;


        return (
            <li key={keyword}>
                <img src={icon} alt={name} />
                <span>{name}</span>
            </li>
        )
    })



    return (
        <div className={`menuWrapper ${isOverflow ? 'overflow' : ''} `} >
            <img id={`removeMenuItem`} src={arrow} alt={`Move Left`} className={`controlIcon left`} onClick={handMenuItems} />
            <ul ref={menuWrapperDOM} >
                {menuItems}
            </ul>
            <img id={`addMenuItem`} src={arrow} alt={`Move Left`} className={`controlIcon`} onClick={handMenuItems}/>

        </div>
    )


};

export default MenuComponent; 