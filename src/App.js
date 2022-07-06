// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Whyus from './Components/Whyus';
import Features from './Components/Features';
import Knowtodo from './Components/Knowtodo';
import Meet from './Components/Meet';

function App() {
  return (
    <Router>
      <div>
    <Switch>
    <Route exact path="/about">
      <Features />
    </Route>
    <Route exact path="/bookamb">
      <Knowtodo />
    </Route>
    <Route exact path="/firstaid">
      <Meet />
    </Route>
    <Route exact path="/why">
      <Whyus />
    </Route>
  </Switch>
  </div>
  </Router>
  );
}

export default App;
