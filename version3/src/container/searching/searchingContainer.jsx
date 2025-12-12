//Import External Modules 
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Import Internal Modules 
import SearchingComponent from '../../component/searching/searchingComponent';
import { MasterContext } from '../../container/master/data/masterContext';

const SearchingContainer = () => {

    //Actions for Hook 
    const navigate = useNavigate();

    //Page Information Control 
    const {pageInfoData} = useContext(MasterContext)
    const { setPageReference } = pageInfoData.actions;

    //Input Handler 
    const [term, setTerm] = useState('Searching');
    const handleInputChange = (event) => {
        const useInput = event.target.value; 
        setTerm(useInput);
    }
    const handleInputFocus = () => {
        setTerm('');
    }


    //Submit Handler 
    const handleSubmit = async (event) => {
        event.preventDefault();

        //Input Checking before fetching 
        if (term === "") {
            alert("Seaching Keywords cannot be blank");
            return;
        }
        setPageReference('searching'); 
        navigate(`/searching/${term.trim()}`);
    }

    //Exported Data 
    const exprtedData = {
        term
    };
    const exportedActions = {
        handleInputChange,
        handleInputFocus,
        handleSubmit
    }


    return < SearchingComponent
        data={exprtedData}
        actions={exportedActions}
    />

}

//Export Container
export default SearchingContainer; 