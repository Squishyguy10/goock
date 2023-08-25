import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Nim from './components/Nim';
import Tictactoe from './components/Tictactoe';
import Splix from './components/Splix';
import Games from './components/Games';
import Leaderboard from './components/Leaderboard';
import goose from './images/goose_cartoon.png';
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

          <Route exact path='games'>
            <Games />
          </Route>

          <Route exact path='leaderboard'>
            <Leaderboard />
          </Route>

        </Switch>
      </Router>

      <div className='pl-40'>
        <img src={goose} width={100} height={100} alt='Goose Cartoon' />
      </div>

    </div>
  );
}

export default App;
