import React, { Component } from 'react';
import Carousel from './Carousel'
import { PuzzlePieceIcon } from '@heroicons/react/24/outline';

class Games extends Component {
    render() {
        const slides = [
            'tictactoe.svg',
            'nim.svg',
            'pong.webp'
        ];

        return (
            <div className="bg-amber-100">
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