import React, { Component } from 'react';
import Carousel from './Carousel'
import { PuzzlePieceIcon } from '@heroicons/react/24/outline';

class Games extends Component {
    render() {
        const slides = [
            {
                title: 'Tic Tac Toe',
                description: 'The tic tac toe you know and love! One player is X whilst the other is O. X goes first. Place your piece in any vacant square. First to get 3 in a row in any direction wins!',
                page: '/submit/tictactoe',
                image: 'tictactoe.svg',
            },
            {
                title: 'Nim',
                description: 'There is some number of piles of stones and each pile has some number of stones. Player A goes first and player B goes second. On each turn, you may remove any number of stones from any single pile. Whoever removes the last stone from the last remaining pile wins.',
                page: '/submit/nim',
                image: 'nim.svg',
            },
            {
                title: 'Pong',
                description: 'The notorius arcade game! One ball moves across the screen, and 2 players—with their paddle on the side of the screen—move their paddles vertically to deflect the ball. If the ball goes past your paddle, you lose.',
                page: '/submit/pong',
                image: 'pong.webp',
            },
        ]

        return (
            <div className="bg-gradient-to-b from-amber-100 via-amber-100 to-white">
                <div className='container px-5 mx-auto text-center lg:px-40'>
                    <div className='flex flex-col w-full mb-20'>
                        <PuzzlePieceIcon className='mx-auto inline-block w-10 py-10' />
                        <h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 font-display'>
                            Games
                        </h1>
                        <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                            Here is the selection of games. Have fun!
                        </p>
                    </div>
                </div>

                <div className="w-[30%] m-auto">
                    <Carousel slides={slides}/>
                </div>
                <br /> <br /> <br />

            </div>
        );
    }
}

export default Games;