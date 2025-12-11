

//Import Internal Modules 
import LoadingComponent from '../../../assets/ripples.svg?react';
import styles from './loading.module.css';

const Loading = () => {

    return (
        <div className={styles.loadingWrapper}>
            <LoadingComponent />
        </div>
    )

};

export default Loading; 