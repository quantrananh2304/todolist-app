import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './Pages';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={HomePage}></Route>
            </Switch>
        </Router>
    );
}

export default App;
