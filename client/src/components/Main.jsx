import React from 'react';
import { Link } from 'react-router-dom';

function Main() {

    return (
        <div className='container px-5, py-10 mx-auto text-center lg:px-40'>

            {/*Title*/}
            <h1 className='text-7xl py-10 font-display'>
                Goock Games
            </h1>

            {/*Buttons*/}
            <div className='inline-flex gap-x-4'>
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
        </div>
    );

}

export default Main;