import React, { Component } from 'react';

const socket = new WebSocket('ws://localhost:3001');
var leaderData;

class Leaderboard extends Component {

    constructor(props) {
        this.state = {
            game: props.game,
        };
		this.getLeaderboardData();
    }
	
	getLeaderboardData() {
		let leaderboardRequest = {
			type: "requestLeaderboard",
			game: this.state.game
		};
		socket.send(JSON.stringify(leaderboardRequest));
		
		socket.addEventListener('message', (event) => {
			leaderData = JSON.parse(event.data);
		});
	}

    render() {
        return (
            <div>

            </div>
        );
    }

}

export default Leaderboard;