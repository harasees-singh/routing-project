import { Route, useParams } from "react-router-dom";
import Comments from '../components/comments/Comments'

const QuoteDetails = () => {
    const params = useParams();

    return <>
        <h2>Quote Details</h2>
        <p>{params.quoteid}</p>
        <Route path={`/quotes/${params.quoteid}/comments`}>
            <Comments />
        </Route>
    </>
}
export default QuoteDetails;