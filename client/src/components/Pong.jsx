import React, { Component } from 'react';
import Submission from './Submission';

class Pong extends Component {
    render() {
        return (
            <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
                <Submission game='pong' />
            </div>
        );
    }
}

export default Pong;