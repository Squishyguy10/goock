import React, { Component } from 'react';

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

class NimPostSubmit extends Component {

    constructor(props) {
        super(props);

        this.state = {
            piles: props.piles,
        };

    }

    getPileString(cnt) {
        let pile = '';
        for (let i=0; i<cnt; i++) pile += '🗿';
        return pile;
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
                {(testJson).map((pile) => (
                    <tbody className='text-lg'>
                        <tr key={pile}>
                            <td>{pile.num}</td>
                            <td>{this.getPileString(pile.cnt)}</td>
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

export default NimPostSubmit;