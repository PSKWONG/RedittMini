
import {useDispatch} from 'react-redux'; 
import {fetchPages, updatePageInfo} from '../../features/postDisplay/postSlice'; 
import icon from '../../component/searching/images/searching.png'; 

const useSubmitHandler = (searchingTerm) => {

    const dispatch = useDispatch(); 


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
        dispatch(fetchPages({type:"searching", keyword:searchingTerm})); 

    }
    
    return handleSubmit;
}

export default useSubmitHandler; 