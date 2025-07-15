
import SearchingComponent from '../../component/searching/SearchingComponent';
import useInputHandler from './useInputHandler'; 
import useSubmitHandler from './useSubmitHandler'; 

const SearchingContainer = ()=>{

    //Input Handler 
    const inputControl = useInputHandler(); 

    //Submit Handler 
    let searchingTerm = inputControl.term.trim();
    const handleSubmit = useSubmitHandler(searchingTerm); 
    

    return < SearchingComponent  
        input = {inputControl}
        submit = {handleSubmit}
    />

}

//Export Container
export default SearchingContainer; 