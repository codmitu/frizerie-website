import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Despre from './components/Despre';
import Preturi from './components/Preturi';
import Rezervari from './components/Rezervari';

function App() {

  return (
    <Router basename="/website-demo">
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/despre" component={Despre} />
        <Route path="/preturi" component={Preturi} />
        <Route path="/rezervari" component={Rezervari} />
      </Switch>
    </Router>
  );
}

export default App;
