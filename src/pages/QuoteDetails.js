import { Route, useParams } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import NotFound from "./NotFound";
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

    const quote = DUMMY_QUOTES.find((someQuote) => someQuote.id === params.quoteid);

    if(!quote){
        return <NotFound />
    }

    return <>
        <HighlightedQuote quote={quote} />
        <Route path={`/quotes/${params.quoteid}/comments`}>
            <Comments />
        </Route>
    </>
}
export default QuoteDetails;