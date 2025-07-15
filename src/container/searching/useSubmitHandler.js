
/************ Import External Components **************** */
import {useDispatch} from 'react-redux'; 
import {useNavigate} from 'react-router-dom'; 

/************ Import Internal Components **************** */
import {updatePageInfo} from '../../features/postDisplay/postSlice'; 
import icon from '../../component/searching/images/searching.png'; 

const useSubmitHandler = (searchingTerm) => {

    const dispatch = useDispatch(); 
    const navigate = useNavigate();


    const handleSubmit = async (event) => {

        //Prevent Page Refreshing 
        event.preventDefault();

        //Input Checking before fetching 
        if (searchingTerm === "") {
            alert("Seaching Keywords cannot be blank");
            return;
        }

        //Update the App Store 
        dispatch(updatePageInfo({name:'Searching', icon})); 
        navigate(`/searching/${searchingTerm}`); 

    }
    
    return handleSubmit;
}

export default useSubmitHandler; 