import { useEffect } from 'react'
import QuoteList from '../components/quotes/QuoteList'
import useHttp from '../hooks/hooks/use-http'
import LoadingSpinner from '../components/UI/LoadingSpinner'
import { getAllQuotes } from '../lib/lib/api'
import NoQuotesFound from '../components/quotes/NoQuotesFound'
// const DUMMY_QUOTES = [
//     {
//         id: 'q1',
//         author: 'charmi',
//         text: 'now i am holding all the cards and n**gas wanna play chess now'
//     },
//     {
//         id: 'q2',
//         author: 'charmi',
//         text: 'ni**a had a problem till i showed up'
//     }
// ]
const AllQuotes = () => { 
    const {sendRequest, status, data: loadedQuotes, error} = useHttp(getAllQuotes, true);
    
    useEffect( () => {
        sendRequest();
    }, [sendRequest])
    
    if(status === 'pending'){
        return <div className='centered'>
            <LoadingSpinner />
        </div>
    }
    if(error){
        return <p className='centered focused'>
            {error}
        </p>
    }
    if(status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)){
        return <NoQuotesFound />
    }
    return <h2><QuoteList quotes={loadedQuotes} /></h2>
}
export default AllQuotes;