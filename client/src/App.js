import React, { Component } from 'react';
import logo from './assets/logo.png';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches';
import './App.scss';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div className="container">
        <img src={logo} alt="logo" style={{width: 300, display: 'block', margin: 'auto'}} />
        <Launches />
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
