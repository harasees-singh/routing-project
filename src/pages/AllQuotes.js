import QuoteList from '../components/quotes/QuoteList'
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
const AllQuotes = () => { 
    return <h2><QuoteList quotes={DUMMY_QUOTES} /></h2>
}
export default AllQuotes;