import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import NotFound from "./NotFound";
import { getSingleQuote } from "../lib/lib/api";
import useHttp from "../hooks/hooks/use-http";
import { useEffect } from "react";

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
    const { sendRequest, status, data, error } = useHttp(getSingleQuote)
    
    useEffect( () => {
        sendRequest(params.quoteid);
    }, [])
    const quote = data
    // console.log(status, data, error)

    if (!quote) {
        return <NotFound />
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