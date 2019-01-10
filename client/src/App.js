import React, { Component } from 'react';
import logo from './assets/logo.png';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches';
import LaunchWrapper from './components/LaunchWrapper';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

const client = new ApolloClient({
  uri: '/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
          <img src={logo} alt="logo" style={{width: 300, display: 'block', margin: 'auto'}} />
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={LaunchWrapper} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
