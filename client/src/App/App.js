import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Page from './components/Page';
import Footer from './components/Footer';
import Navigation from './components/Navbar';
class App extends Component {
  render() {
    const App = () => (
      <div>
        <Navigation/>
        <Page/>
        <Footer/>

        
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;