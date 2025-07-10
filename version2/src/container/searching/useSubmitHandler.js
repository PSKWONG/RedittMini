
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


        /* Replaced by the Page slice */ 

        //Fetch Searching Result
        /*
        let fetchingResponse ; 
        
        try {
            //Variable on  URL 
            const fetchURL = `https://www.reddit.com/search.json?q=${encodeURIComponent(searchingTerm)}`;
            const response = await fetch(fetchURL);
            const json = await response.json();
            fetchingResponse = json.data;



            //Temp Checking
            //console.log('response', fetchingResponse); 

        } catch (error) {
            console.log('Fail in fetching post by terms');
            throw error;
        }
            */

        //Update the App Store 
        dispatch(updatePageInfo({name:'Searching', icon})); 
        dispatch(fetchPages({type:"searching", keyword:searchingTerm})); 

    }
    
    return handleSubmit;
}

export default useSubmitHandler; 