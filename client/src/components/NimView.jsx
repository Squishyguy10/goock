import React, { Component } from 'react';

const socket = new WebSocket('ws://localhost:3001');


class NimView extends Component {

    constructor(props) {
        super(props);
        this.state = {
			game: "nim",
            piles: [1],
			gameHistory: [],
            p1: '',
            p2: '',
            p1t: false,
            winner: '',
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
            for (let j=0; j<arr.length; j++) {
                obj.push({ num: j, cnt: arr[j] });
            }

            let playerOne = this.state.gameHistory[rand].one;
		    let playerTwo = this.state.gameHistory[rand].two;
		    let winnerr = this.state.gameHistory[rand].winner;

            let w = (winnerr === 'one' ? playerOne : playerTwo);

            let turn = (i % 2 === 0) ? true : false;

			this.setState({ 
                piles: obj,
                p1: playerOne,
                p2: playerTwo,
                winner: w,
                p1t: turn,
             }, () => {

            });
			i = (i + 1) % moves;
		}.bind(this), 3000);
    }

    getStyle1() {
        return this.state.p1t ? 'font-bold' : '';
    }

    getStyle2() {
        return !this.state.p1t ? 'font-bold' : '';
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
            <div className='bg-amber-100'>
                <div className='pt-52, pb-80'>
                    <div className='flex justify-center container px-5 mx-auto text-center md:px-40 pb-20'>
                        <table cellPadding='30'>
                            {this.getTable()}
                        </table>

                        
                    </div>
                    <div className='flex justify-center text-xl'>
                        <h1 className={this.getStyle1()}>{this.state.p1 + ' '}</h1>  
                        <h1 className='px-3'> vs. </h1>
                        <h1 className={this.getStyle2()}>{' ' + this.state.p2}</h1>
                    </div>
                    <div className='flex justify-center text-xl pt-5'>
                        <h1>Winner: {this.state.winner}</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default NimView;