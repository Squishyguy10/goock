import React from 'react';
import { Link } from 'react-router-dom';
import goose from './images/goose_cartoon.png';
import { BookOpenIcon } from '@heroicons/react/24/outline';

function Main() {

    return (
        <div>
            <div className='pt-40 pl-40'>
                <img src={goose} width={100} height={100} alt='Goose Cartoon' />
            </div>

            <div className='container px-5, py-10 mx-auto text-center lg:px-40'>

                {/*Title*/}
                <h1 className='text-7xl pb-10 font-display'>
                    Goock Games
                </h1>

                {/*Buttons*/}
                <div className='inline-flex gap-x-4 pb-4'>
                    <Link to='/games'>
                        <button className='py-2 px-4 bg-blue-400 text-white text-xl hover:bg-blue-500 rounded border-b-4 border-blue-600 hover:border-blue-800'>
                            View Games
                        </button>
                    </Link>

                    <Link to='/leaderboard'>
                        <button className='py-2 px-4 bg-blue-400 text-white text-xl hover:bg-blue-500 rounded border-b-4 border-blue-600 hover:border-blue-800'>
                            View Leaderboards
                        </button>
                    </Link>
                </div>
                <br />
                <Link to='#instructions'>
                    <button className='py-2 px-4 bg-red-400 text-white text-xl hover:bg-red-500 rounded border-b-4 border-red-600 hover:border-red-800'>
                        How to Play
                    </button>
                </Link>

                <section id='instructions' className='font-base'>
                    <BookOpenIcon />
                </section>

            </div>
        </div>
    );

}

export default Main;