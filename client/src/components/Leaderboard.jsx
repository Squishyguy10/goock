import React, { Component } from 'react';
import { XMarkIcon, CubeIcon, Squares2X2Icon } from '@heroicons/react/24/outline';

const socket = new WebSocket('ws://localhost:3001');

class Leaderboard extends Component {

    constructor(props) {
		super(props);
        this.state = {
            game: props.game,
			leaderData: []
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

    getTable() {
        return (
            <div> 
                <thead>
                    <tr className='text-xl'>
                        <th>Place</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
				{this.state.leaderData.map((user, index) => ( //{(this.state.leaderData).map((user, index) => (
                    <tbody className='text-lg'>
                        <tr key={user} className={index % 2 === 1 ? 'bg-amber-100' : 'bg-white'}>
                            <td className='font-bold'>{user.place}</td>
                            <td>{user.name}</td>
                            <td>{user.score}</td>
                        </tr>   
                    </tbody>
                ))}
            </div>
        );
    }

    getIcon(styling) {
        if (this.state.game === 'tictactoe') return <XMarkIcon className={styling} />
        else if (this.state.game === 'nim') return <CubeIcon className={styling} />
        else return <Squares2X2Icon className={styling} />
    }

    getName() {
        if (this.state.game === 'tictactoe') return 'Tic Tac Toe';
        else if (this.state.game === 'nim') return 'Nim';
        else return 'Splix';
    }

    render() {
        return (
            <div className='text-center bg-amber-100'>
                {this.getIcon('mx-auto w-10 py-10')}
                <h1 className='sm:text-4xl text-3xl font-medium title-font font-display pb-10'>
                    Top Submissions for {this.getName()}
                </h1>
                <div className='flex justify-center container px-5 mx-auto text-center md:px-40 pb-20'>
                    
                    <table cellPadding='50'>
                        {this.getTable()}
                    </table>
                    
                </div>
            </div>
        );
    }

}

export default Leaderboard;
