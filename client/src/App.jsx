import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Nim from './components/Nim';
import Tictactoe from './components/Tictactoe';
import Splix from './components/Splix';
import Games from './components/Games';
import Submission from './components/Submission';
import LeaderboardHub from './components/LeaderboardHub';
import Instructions from './components/Instructions';
import GetFeatured from './components/GetFeatured';
import Leaderboard from './components/Leaderboard';
import TictactoeCanvas from './components/TictactoeCanvas';
import BottomBar from './components/BottomBar';
import NimCanvas from './components/NimCanvas';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar />
      
      <Router>
        <Switch>

          <Route exact path='/'>
            <Main />
            <Instructions />
            <GetFeatured />
          </Route>

          <Route exact path='/games'>
            <Games />
          </Route>

          <Route exact path='/leaderboards'>
            <LeaderboardHub />
          </Route>

          <Route exact path='/tictactoe'>
            <Tictactoe />
          </Route>

          <Route exact path='/nim'>
            <Nim />
          </Route>

          <Route exact path='/splix'>
            <Splix />
          </Route>

          <Route exact path='/leaderboard/nim'>
            <Leaderboard game='nim' />
          </Route>

          <Route exact path='/leaderboard/tictactoe'>
            <Leaderboard game='tictactoe' />
          </Route>

          <Route exact path='/leaderboard/splix'>
            <Leaderboard game='splix' />
          </Route>

          <Route exact path='/canvas'>
            {/* <TictactoeCanvas boardState='         ' /> */}
            <NimCanvas />
          </Route>

        </Switch>
      </Router>

      <BottomBar />

    </div>
  );
}

export default App;
