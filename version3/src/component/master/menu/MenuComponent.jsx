

//Import Internal Modules 
import './menu.css';
import arrow from './images/arrow.png';


const MenuComponent = (props) => {

    //Get props Data
    const { data, actions } = props;
    const { menuWrapperDOM, menuItemContent, isOverflow } = data;
    const { handMenuItems } = actions;

    return (
        <div className={`menuWrapper ${isOverflow ? 'overflow' : ''} `} >
            <img id={`removeMenuItem`} src={arrow} alt={`Move Left`} className={`controlIcon left`} onClick={handMenuItems} />
            <ul ref={menuWrapperDOM} >
                {menuItemContent}
            </ul>
            <img id={`addMenuItem`} src={arrow} alt={`Move Left`} className={`controlIcon`} onClick={handMenuItems} />

        </div>
    )


};

export default MenuComponent; 