import React, { Component } from 'react';
import { PuzzlePieceIcon } from '@heroicons/react/24/outline';
import Carousel from './Carousel'

class Games extends Component {
    render() {
        const slides = [
            'tictactoe.svg',
            'nim.svg',
            'splix.webp'
        ];

        return (
            <div className="bg-amber-100">
                <div className="w-[30%] m-auto">
                    <Carousel slides={slides}/>
                </div>
            </div>
        );
    }
}

export default Games;