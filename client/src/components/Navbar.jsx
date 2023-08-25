import React from 'react';

function Navbar() {

    return (
        <header className='bg-amber-200 md:sticky top-0 z-10'>
            <div className='container flex flex-wrap p-2 flex-col md:flex-row items-center text-amber-700'>
                <a className='title-font font-medium mb-4 md:mb-0'>
                    <a href='/' className='ml-3 text-2xl text-amber-800 font-bold'>
                        Goock Games
                    </a>
                </a>
                <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-amber-700 flex flex-wrap items-center text-xl justify-center'>
                    <a href='/games' className='mr-5 hover:text-amber-400'>
                        Games
                    </a>
                    <a href='/leaderboards' className='mr-5 hover:text-amber-400'>
                        Leaderboards
                    </a>
                    <a href='/hints' className='mr-5 hover:text-amber-400'>
                        Hints
                    </a>
                    <a href='/spectate' className='mr-5 hover:text-amber-400'>
                        Spectate
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;