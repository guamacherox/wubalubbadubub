import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import client from './services/client';
import CharacterList from './components/chararacter/CharacterList';

function App() {
  // Create the count state.

  // const [count, setCount] = useState(0);
  //Create the counter(+1 every second).
  // useEffect(() => {
  //   const timer = setTimeout(() => setCount(count + 1), 1000);
  //   return () => clearTimeout(timer);
  // }, [count, setCount]);
  // Return the App component.
  console.info('App Renders');
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to reload.
    //     </p>
    //     <p>
    //       Page has been open for <code>{count}</code> seconds.
    //     </p>
    //   </header>
    // </div>
    <ApolloProvider client={client}>
      <Router>
        <div>
          <h2 style={{ textAlign: 'center' }}>Rick and Morty 🚀</h2>
          {/* <ExchangeRates /> */}
        </div>
        <Switch>
          <Route path="*" component={CharacterList} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
