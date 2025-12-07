//Import External modules 
import { useState } from 'react';

//Import Internal Modules 
import useResponsiveLayout from './hook/useResponsiveController';
import PageComponent from '../../component/master/MasterPageComponent';
import { MasterContext } from './data/masterContext';


const MasterPageComponent = () => {

    //Apply Responsive Layout Control 
    useResponsiveLayout();

    //Page information 
    const [pageReference, setPageReference] = useState();
    const [keywords, setKeywords] = useState();

    //Export Data 
    const pageInfoData = {
        data: {
            pageReference,
            keywords
        },
        actions: {
            setPageReference,
            setKeywords
        }
    }

    return (
        <MasterContext.Provider value={{ pageInfoData }} >
            <PageComponent />
        </MasterContext.Provider>
    )

};

export default MasterPageComponent; 