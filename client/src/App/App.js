import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Page from './components/Page';
import Navigation from './components/Navbar';
import Loading from "./components/Loading";
import Profile from "./views/Profile";
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import Articles from './pages/Articles.js';
import Events from './pages/Events.js';
import {Container} from 'react-bootstrap';




const App = () => {
  const { loading } = useAuth0();

      if (loading) {
        return <Loading />;
      }
      return (
        <Router history={history}>
          <div id="app" className="d-flex flex-column h-100">
          
          <Navigation color="transparent"/>
        
              <Switch>
                <Route path="/" exact component={Page} />
                <Route path="/articles" exact component={Articles} />
                <Route path="/events" exact component={Events} />
                <PrivateRoute path="/profile" component={Profile} />
              </Switch>
             
          </div>
        </Router>
      );
  }

export default App;