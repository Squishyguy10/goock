import React, {useState} from 'react';
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
        title: 'Pong',
        description: 'The notorius arcade game! One ball moves across the screen, and 2 players—with their paddle on the side of the screen—move their paddles vertically to deflect the ball. If the ball goes past your paddle, you lose.',
        page: '/pong',
        image: 'pong.webp',
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
            

            <div className={`flex transition ease-out duration-400`} style={{ transform: `translateX(-${current*100}%)` }}>
                {slides.map((s) => { 
                    return <img src={s} alt={"games"} className=""/>; 
                })}
            </div>


            <div className="absolute top-0 h-full w-full justify-between flex">
                <button onClick={prevSlide} aria-label="left" size="small" className="text-purple-700">
                    <ArrowBackIosNewIcon />
                </button>
                <button onClick={nextSlide} aria-label="right" size="small" className="text-purple-700">
                    <ArrowForwardIosIcon />
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