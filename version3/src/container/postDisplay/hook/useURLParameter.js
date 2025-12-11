//Import External Modules 
import { useParams, useLocation } from 'react-router-dom';


const useURLParameter = () => {

    /* Get information from the URL */
    //Get the Type 
    const location = useLocation();
    const type = location.pathname.startsWith('/searching') ? 'searching' : 'Page';

    //Get the Keywords 
    const { keyword } = useParams();

    return {type, keyword}

}

export default useURLParameter