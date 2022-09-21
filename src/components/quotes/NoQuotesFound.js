import classes from './NoQuotesFound.module.css';
import {useHistory} from 'react-router-dom'
const NoQuotesFound = () => {
    const history = useHistory();
    const onAddHandler = () => {
        history.push(`/new-quote`);
    }
    return (
        <div className={classes.noquotes}>
            <p>No quotes found!</p>
            <a onClick={onAddHandler} className='btn'>
                Add a Quote
            </a>
        </div>
    );
};

export default NoQuotesFound;
