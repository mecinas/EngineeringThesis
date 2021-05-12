import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Start from './components/Start'
import Redirecting from './components/Redirecting'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import DefaultNavbar from './components/DefaultNavbar'
import AccountManager from './components/account/AccountManager'

//Zabezpieczenie stron

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/">
            <Start />
          </Route>

          <Route path="/redirect">
            <Redirecting />
          </Route>

          <Route path="/account">
            <DefaultNavbar />
          </Route>

          <Route path="/account/dashboard">
            <Dashboard />
          </Route>

          <Route path="/account/manager">
            <AccountManager />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

      </Router>
    </div>
  );
}

export default App;
