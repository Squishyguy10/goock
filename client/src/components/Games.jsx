import React, { Component } from 'react';
import { PuzzlePieceIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { games } from './datajsons/gamedata';

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
                            <div className='flex relative py-10 border-4 border-black'>
                                <img 
                                    alt={game.title}
                                    className='absolute inset-0 w-full h-full object-cover object-center py-10 '
                                    src={game.image}
                                />
                            
                                <div className='px-8 py-10 relative z-10 w-full border-4 border-blue-500 bg-blue-900 opacity-0 hover:opacity-100'>
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