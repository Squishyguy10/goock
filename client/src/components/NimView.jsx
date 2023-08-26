import React, { Component } from 'react';

const socket = new WebSocket('ws://localhost:3001');

const testJson = [
    {
        num: 0,
        cnt: 10
    },
    {
        num: 1,
        cnt: 3
    },
    {
        num: 2,
        cnt: 8
    },
    {
        num: 3,
        cnt: 9
    },
]

class NimView extends Component {

    constructor(props) {
        super(props);
        this.state = {
			game: "nim",
            piles: [1],
			gameHistory: []
        };
		this.getGameHistory();
    }
	
	getGameHistory() {
		socket.addEventListener('open', () => {
			let gameHistoryRequest = {
				game: this.state.game
			};
			let message = {
				type: "requestGameHistory",
				data: gameHistoryRequest
			};
			socket.send(JSON.stringify(message));
		});
		socket.addEventListener('message', (event) => {
			this.setState({gameHistory: JSON.parse(event.data)});
            console.log(this.state.gameHistory);
            if (this.state.gameHistory.length > 0) this.displayGame();
		});
	}

    getPileString(cnt) {
        let pile = '';
        for (let i=0; i<cnt; i++) pile += '🗿';
        console.log(pile);
        return pile;
    }

    displayGame() {
        let rand = Math.floor(Math.random() * this.state.gameHistory.length);
        let moves = this.state.gameHistory[rand].game.length;
		let i=0;
		setInterval(function() {
			let curState = this.state.gameHistory[rand].game[i];
            let arr = curState.split(',');
            let obj = []
            for (let i=0; i<arr.length; i++) {
                obj.push({ num: i, cnt: arr[i] });
            }
			this.setState({ piles: obj }, () => {

            });
			i = (i + 1) % moves;
		}.bind(this), 3000);
    }

    getTable() {
        return (
            <div>
                <thead>
                    <tr className='text-xl'>
                        <th>Pile</th>
                        <th>Stones</th>
                    </tr>
                </thead>
                {(this.state.piles).map((pile) => (
                    <tbody className='text-lg'>
                        <tr key={pile}>
                            <td>{pile.num}</td>
                            <td>{this.getPileString(parseInt(pile.cnt))}</td>
                        </tr>
                    </tbody>
                ))}
            </div>
        );
    }

    render() {
        return (
            <div className='flex justify-center container px-5 mx-auto text-center md:px-40 pb-20'>
                <table cellPadding='30'>
                    {this.getTable()}
                </table>
            </div>
        );
    }
}

export default NimView;