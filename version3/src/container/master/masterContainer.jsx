

//Import Internal Modules 
import useResponsiveLayout from './hook/useResponsiveController'; 
import PageComponent from '../../component/master/MasterPageComponent'; 


const MasterPageComponent = ()=>{

    //Apply Responsive Layout Control 
    useResponsiveLayout(); 


    return <PageComponent />

}; 

export default MasterPageComponent; 