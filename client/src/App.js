import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import Container from '@mui/material/Container';

// nav routes
const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/about" component={ About } />
      <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
)

export default App;
