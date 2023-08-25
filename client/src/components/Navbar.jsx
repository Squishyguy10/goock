import React from 'react';

function Navbar() {

    return (
        <header className='bg-gray-700 md:sticky top-0 z-10'>
            <div className='container flex flex-wrap p-2 flex-col md:flex-row items-center text-gray-300'>
                <a className='title-font font-medium mb-4 md:mb-0'>
                    <a href='/' className='ml-3 text-2xl text-gray-100'>
                        Goock Games
                    </a>
                </a>
                <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-xl justify-center'>
                    <a href='/games' className='mr-5 hover:text-white'>
                        Games
                    </a>
                    <a href='/leaderboards' className='mr-5 hover:text-white'>
                        Leaderboards
                    </a>
                    <a href='/hints' className='mr-5 hover:text-white'>
                        Hints
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;