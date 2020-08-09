import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import {MainPage} from './main_page';

class App extends React.Component {
    render () {
        return <Router>
            <Switch>
                <Route path={'/'} component={MainPage}/>
            </Switch>
        </Router>;
    }
}

ReactDOM.render(<App/>, document.getElementById('cool'));

