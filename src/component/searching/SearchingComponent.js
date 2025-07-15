import React from 'react';

const SearchingComponent = (props) => {

    //Searching Input 
    const { handleInputChange, handleInputFocus } = props.input.action; 


    return (
        <form onSubmit={props.submit}> 
            <input
                type="text"
                value={props.input.term}
                onClick={handleInputFocus}
                onChange={handleInputChange}
            />
            <button type="submit"  />
        </form>
    )


}

export default SearchingComponent; 

