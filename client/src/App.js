import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />

      <Router>
        <Switch>

          <Route exact path='/'>
            <Main />
          </Route>

          <Route exact path='nim'>
            <Nim />
          </Route>

          <Route exact path='tictactoe'>
            <Tictactoe />
          </Route>

          <Route exact path='splix'>
            <Splix />
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
