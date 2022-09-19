import { Route, Switch } from 'react-router-dom'
import AllQuotes from './pages/AllQuotes';
import QuoteDetails from './pages/QuoteDetails';
function App() {
    return (
        <div>
            <Switch>
                <Route path='/quotes'>
                    <AllQuotes />
                </Route>

                <Route path='/quotes/:quoteid'>
                    <QuoteDetails />
                </Route>

                <Route path='/new-quote'></Route>
            </Switch>
        </div>
    );
}

export default App;
