//Import External modules 
import { useState, useEffect } from 'react';

//Import Internal Modules 
import useResponsiveLayout from './hook/useResponsiveController';
import PageComponent from '../../component/master/MasterPageComponent';
import { MasterContext } from './data/masterContext';


const MasterPageComponent = () => {

    //Apply Responsive Layout Control 
    useResponsiveLayout();

    //Page information 
    const [pageReference, setPageReference] = useState();
    const [pageDetail, setPageDetail] = useState(null);
    const [keywords, setKeywords] = useState();

    //Export Data 
    const pageInfoData = {
        data: {
            pageReference,
            keywords,
            pageDetail
        },
        actions: {
            setPageReference,
            setKeywords,
            setPageDetail
        }
    }

    return (
        <MasterContext.Provider value={{ pageInfoData }} >
            <PageComponent />
        </MasterContext.Provider>
    )

};

export default MasterPageComponent; 