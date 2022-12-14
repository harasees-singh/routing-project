import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm'
import useHttp from '../hooks/hooks/use-http';
import { useEffect } from 'react';
import { addQuote } from '../lib/lib/api';
const NewQuote = () => {
    const history = useHistory();
    const {sendRequest, status} = useHttp(addQuote);

    useEffect( () => {
        if(status === 'completed')
            history.push('/quotes');
    }, [status, history]);

    const addQuoteHandler = quoteData => {
        sendRequest(quoteData);

    }
    return <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}/>    
}
export default NewQuote;