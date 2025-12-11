
//Import internal modules 
import './search.css';

const SearchingComponent = (props) => {

    //Searching Input 
    const { handleInputChange, handleInputFocus, handleSubmit } = props.actions; 
    const {term} = props.data


    return (
        <form onSubmit={handleSubmit}> 
            <input
                type="text"
                value={term}
                onClick={handleInputFocus}
                onChange={handleInputChange}
            />
            <button type="submit"  />
        </form>
    )


}

export default SearchingComponent; 

