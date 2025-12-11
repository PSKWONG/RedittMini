//Import External Modules 
import { useState, useEffect } from 'react';

const useReditData = (type, keyword) => {

    //Lodaing Status 
    const [isLoading, setIsLoading] = useState(false);
    const [pageData, setPageData] = useState(null);

    //Get the information from server 
    useEffect(() => {



        const getInfo = async () => {

            //Set the Loading Status 
            setIsLoading(true);

            //Fetch through netlify function 
            const response = await fetch(`/.netlify/functions/reddit?type=${type}&keyword=${keyword}`);
            const json = await response.json();

            setPageData(json);
            setIsLoading(false);

        }

        getInfo();


    }, [type, keyword])

    return {isLoading, pageData}; 

}

export default useReditData; 