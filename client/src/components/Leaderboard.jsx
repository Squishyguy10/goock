import React, { Component } from 'react';

const socket = new WebSocket('ws://localhost:3001');

class Leaderboard extends Component {

    constructor(props) {
		super(props);
        this.state = {
            game: props.game,
			leaderData: {}
        };
		this.getLeaderboardData();
    }
	
	getLeaderboardData() {
		socket.addEventListener('open', () => {
			let leaderboardRequest = {
				game: this.state.game
			};
			let message = {
				type: "requestLeaderboard",
				data: leaderboardRequest
			};
			socket.send(JSON.stringify(message));
		});
		
		socket.addEventListener('message', (event) => {
			this.setState({leaderData: JSON.parse(event.data)});
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