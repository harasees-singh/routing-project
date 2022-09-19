import { Route, Switch, Redirect } from 'react-router-dom'
import AllQuotes from './pages/AllQuotes';
import QuoteDetails from './pages/QuoteDetails';
import NewQuote from './pages/NewQuote';
function App() {
    return (
        <div>
            <Switch>
                <Route path='/' exact>
                    <Redirect to='/quotes'/>
                </Route>
                <Route path='/quotes' exact>
                    <AllQuotes />
                </Route>

                <Route path='/quotes/:quoteid'>
                    <QuoteDetails />
                </Route>

                <Route path='/new-quote'>
                    <NewQuote />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
