import React from 'react'; 

/*********** Import Internal Components *********/
import loadingSign from './images/ripples.svg'; 
import styles from './app.module.css'; 

const LoadingComponent = ({condition})=>{

    return (
        <>
            {
                ( condition?? true )
                &&
                <img src={loadingSign} alt="Loading" className={styles.loadingSign} />
            }
        </>
    )
    
}

export default LoadingComponent; 