import React, {useState} from 'react';
import { PuzzlePieceIcon } from '@heroicons/react/24/outline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from 'react-router-dom';


const games = [
    {
        title: 'Tic Tac Toe',
        description: 'The tic tac toe you know and love! One player is X whilst the other is O. X goes first. Place your piece in any vacant square. First to get 3 in a row in any direction wins!',
        page: '/tictactoe',
        image: 'tictactoe.svg',
        num: 0,
    },
    {
        title: 'Nim',
        description: 'There is some number of piles of stones and each pile has some number of stones. Player A goes first and player B goes second. On each turn, you may remove any number of stones from any single pile. Whoever removes the last stone from the last remaining pile wins.',
        page: '/nim',
        image: 'nim.svg',
        num: 1,
    },
    {
        title: 'Splix',
        description: 'You start with a small square of territory. You may move in any cardinal direction, and once you venture out of your territory you claim other territory by returning back to your own area. The area you enclosed will become part of your area, just don\'t get hit while you are away from home!',
        page: '/splix',
        image: 'splix.webp',
        num: 2,
    },
]

function Carousel({slides}) {
    let [current, setCurrent] = useState(0);
    
    let prevSlide = () => {
        current === 0 ? setCurrent(slides.length-1) : setCurrent(current-1);
    };

    let nextSlide = () => {
        current === slides.length-1 ? setCurrent(0) : setCurrent(current+1);
    };


    return (
        <div className="overflow-hidden relative">
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

            <div className={`flex transition ease-out duration-400`} style={{ transform: `translateX(-${current*100}%)` }}>
                {slides.map((s) => { 
                    return <img src={s} alt={"games"} className=""/>; 
                })}
            </div>


            <div className="absolute top-40 h-full w-full justify-between flex items-centre text-red">
                <button onClick={prevSlide} aria-label="left" size="small">
                    <ArrowBackIosNewIcon fontSize="inherit" />
                </button>
                <button onClick={nextSlide} aria-label="left" size="small">
                    <ArrowForwardIosIcon fontSize="inherit" />
                </button>
            </div>


            <div className='absolute bottom-0 py-4 flex justify-center gap-3 w-full'>
                {slides.map((s, i) => {
                    return (
                        <div
                            onClick={() => { setCurrent(i); }}
                            key={"circle" + i}
                            className={`rounded-full w-5 h-5 ${ i === current ? "bg-purple-500" : "bg-gray-500" }`}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Carousel;