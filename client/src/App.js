import { Route, Switch } from 'react-router-dom';
import Home from './Components/shared/Home';
import About from './Components/shared/About';
import NoMatch from './Components/shared/NoMatch';
import Navbar from './Components/shared/Navbar';

// nav routes
const App = () => (
  <>
    <Navbar />
    <Switch>
    <Route exact path="/" component={ Home } />
    <Route exact path="/about" component={ About } />
    {/* MAKE SURE NoMatch IS THE LAST ROUTE */}
    <Route component={NoMatch} />
    </Switch>
  </>
)

export default App;
