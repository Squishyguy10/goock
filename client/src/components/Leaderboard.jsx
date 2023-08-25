import React, { Component } from 'react';

const socket = new WebSocket('ws://localhost:3001');



const testJson = [

    {
        place: 1,
        name: 'Basgoong',
        score: 21312,
    },
    {
        place: 2,
        name: 'Fortnite',
        score: 222
    },
    {
        place: 3,
        name: 'Bard',
        score: 2
    }
  
]

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
                <table >
                    <thead>
                        <tr>
                            <th>Place</th>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    {testJson.map((user) => (
                    <tbody>
                        <tr key={user.place}>
                            <td>{user.place}</td>
                            <td>{user.name}</td>
                            <td>{user.score}</td>
                        </tr>   
                    </tbody>
                

                 ))};
                </table>
            </div>
        );
    }

}

export default Leaderboard;