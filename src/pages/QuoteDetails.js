import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import NotFound from "./NotFound";
import { getSingleQuote } from "../lib/lib/api";
import useHttp from "../hooks/hooks/use-http";
import { useEffect } from "react";
import LoadingSpinner from '../components/UI/LoadingSpinner'

const DUMMY_QUOTES = [
    {
        id: 'q1',
        author: 'charmi',
        text: 'now i am holding all the cards and n**gas wanna play chess now'
    },
    {
        id: 'q2',
        author: 'charmi',
        text: 'ni**a had a problem till i showed up'
    }
]
const QuoteDetails = (props) => {
    const params = useParams();
    const match = useRouteMatch();

    // const quote = DUMMY_QUOTES.find((someQuote) => someQuote.id === params.quoteid);
    const { sendRequest, status, data, error } = useHttp(getSingleQuote, true)

    const { quoteid } = params;

    
    useEffect(() => {
        sendRequest(quoteid);
    }, [sendRequest, quoteid])
    const quote = data

    if(status === 'pending'){
        return <div className='centered'>
            <LoadingSpinner />
        </div>
    }
    if(error){
        return <div className='centered'><h2>{error}</h2></div>
    }

    if (!quote.text) {
        return <div className="centered">
            <h2>No quote found</h2>
        </div>
    }
    return <>
        <HighlightedQuote quote={quote} />
        <Route path={`${match.path}`} exact>
            <div className="centered">
                <Link className='btn--flat' to={`/quotes/${params.quoteid}/comments`}>
                    Load Comments
                </Link>
            </div>
        </Route>
        {/* <Route path={`/quotes/${params.quoteid}/comments`}>
            <Comments />
        </Route> */}
        {/* match.path spits out /quotes/:quoteid */}
        <Route path={`${match.path}/comments`}>
            <Comments />
        </Route>
    </>
}
export default QuoteDetails;