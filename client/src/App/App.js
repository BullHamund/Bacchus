import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Page from './components/Page';
import Footer from './components/Footer';
import Navigation from './components/Navbar';
import Loading from "./components/Loading";
import Profile from "./views/Profile";
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import {Container} from 'reactstrap';
import Articles from './pages/Articles.js';
import Events from './pages/Events.js';
import Search from './pages/SearchResults.js';




const App = () => {
  const { loading } = useAuth0();

      if (loading) {
        return <Loading />;
      }
      return (
        <Router history={history}>
          <div id="app" className="d-flex flex-column h-100">
          <Navigation/>
        
            <Container className="flex-grow-1 mt-5">
              <Switch>
                <Route path="/" exact component={Page} />
                <Route path="/articles" exact component={Articles} />
                <Route path="/events" exact component={Events} />
                <Route path="/search" exact component={Search} />
                <PrivateRoute path="/profile" component={Profile} />
              </Switch>
            </Container>
            <Footer />
          </div>
        </Router>
      );
  }

export default App;