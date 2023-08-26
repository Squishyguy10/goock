import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Nim from './components/Nim';
import Tictactoe from './components/Tictactoe';
import Pong from './components/Pong';
import Games from './components/Games';
import LeaderboardHub from './components/LeaderboardHub';
import Instructions from './components/Instructions';
import GetFeatured from './components/GetFeatured';
import Leaderboard from './components/Leaderboard';
import TictactoeView from './components/TictactoeView';
import BottomBar from './components/BottomBar';
import NimView from './components/NimView';
import PongView from './components/PongView';
import Hints from './components/Hints';
import SpectatorHub from './components/SpectatorHub';
import Sample from './components/Sample';
import PostSubmission from './components/PostSubmission';
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

          <Route exact path='/submit/tictactoe'>
            <Tictactoe />
          </Route>

          <Route exact path='/view/tictactoe'>
            <TictactoeView boardState='XXXX OOOO' />
          </Route>

          <Route exact path='/submit/nim'>
            <Nim />
          </Route>

          <Route exact path='/view/nim'>
            <NimView />          
          </Route>

          <Route exact path='/submit/pong'>
            <Pong />
          </Route>

          <Route exact path='/view/pong'>
            <PongView />
          </Route>

          <Route exact path='/postsubmission'>
            <PostSubmission />
          </Route>

          <Route exact path='/leaderboard/nim'>
            <Leaderboard game='nim' />
          </Route>

          <Route exact path='/leaderboard/tictactoe'>
            <Leaderboard game='tictactoe' />
          </Route>

          <Route exact path='/leaderboard/pong'>
            <Leaderboard game='pong' />
          </Route>


          <Route exact path='/hints'>
            <Hints />
          </Route>

          <Route exact path='/submission'>
            {/*Add the submission component here*/}
          </Route>

          <Route exact path='/spectate'>
            <SpectatorHub />
          </Route>

          <Route exact path='/sample'>
            <Sample />
          </Route>

        </Switch>
      </Router>

      <BottomBar />

    </div>
  );
}

export default App;
