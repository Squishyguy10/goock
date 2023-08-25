import React, { Component } from 'react';
import { PuzzlePieceIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const games = [
    {
        title: 'Tic Tac Toe',
        description: 'The tic tac toe you know and love! One player is X whilst the other is O. X goes first. Place your piece in any vacant square. First to get 3 in a row in any direction wins!',
        page: '/tictactoe',
        image: 'tictactoe.svg',
        num: 1,
    },
    {
        title: 'Nim',
        description: 'There is some number of piles of stones and each pile has some number of stones. Player A goes first and player B goes second. On each turn, you may remove any number of stones from any single pile. Whoever removes the last stone from the last remaining pile wins.',
        page: '/nim',
        image: 'nim.svg',
        num: 2,
    },
    {
        title: 'Splix',
        description: 'You start with a small square of territory. You may move in any cardinal direction, and once you venture out of your territory you claim other territory by returning back to your own area. The area you enclosed will become part of your area, just don\'t get hit while you are away from home!',
        page: '/splix',
        image: 'splix.webp',
        num: 3,
    },
]

class Games extends Component {

    render() {
        return (
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

                <div className='flex flex-wrap'>
                    {games.map((game => (
                        
                        <Link to={game.page}>
                            
                            <div className='flex relative py-10'>
                                <img 
                                    alt={game.title}
                                    className='absolute inset-0 w-full h-full object-cover object-center py-10 '
                                    src={game.image}
                                />
                                <div className='px-8 py-10 relative z-10 w-full border-4 border-blue-500 bg-blue-900 opacity-0 hover:opacity-100 transition-x-20 ease-in-out duration-500'>
                                    <h1 className='font-bold title-font text-lg font-medium text-white mb-3'>
                                        {game.title}
                                    </h1>
                                    <p className='leading-relaxed text-white'>{game.description}</p>
                                </div> 
                            </div>
                        </Link>
                    )))}
                </div>
            </div>

        );
    }
}

export default Games;