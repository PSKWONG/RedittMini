import { useState } from 'react';


const useInputHandler = () => {

    //Variable for storing the Searching Term
    const [term, setTerm] = useState('Searching');

    //Handling action related to seraching box 
    const handleInputChange = (event) => {
        setTerm(event.target.value);
    }

    const handleInputFocus = () => {
        setTerm('');
    }


    return {
        term,
        action: { handleInputChange, handleInputFocus }
    }
}

export default useInputHandler; 