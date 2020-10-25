import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import client from './services/client';
import CharacterList from './components/chararacter/CharacterList';

function App() {
  console.info('App Renders');
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <h2 style={{ textAlign: 'center' }}>Rick and Morty 🚀</h2>
        </div>
        <Switch>
          <Route path="*" component={CharacterList} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
