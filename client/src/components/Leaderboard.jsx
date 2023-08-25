import React, { Component } from 'react';

let leaderboardTable = [
    { rank: 1, username: 'Arrow', score: 100 },
    { rank: 2, username: 'Enjiu', score: 90 },
    { rank: 3, username: 'Laymin HK', score: 80 },
];

class Leaderboard extends Component {
    render() {
        return (
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b font-bold">Rank</th>
                                <th className="py-2 px-4 border-b font-bold">Username</th>
                                <th className="py-2 px-4 border-b font-bold">Score</th>
                            </tr>
                        </thead>
                            <tbody>
                            {leaderboardTable.map((person) => (
                                <tr key={person.rank}>
                                <td className="py-2 px-4 border-b">{person.rank}</td>
                                <td className="py-2 px-4 border-b">{person.name}</td>
                                <td className="py-2 px-4 border-b">{person.score}</td>
                            </tr>
                        ))} 
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Leaderboard;