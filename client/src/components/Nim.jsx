import React, { Component } from 'react';
import Submission from "./Submission";

class Nim extends Component {
    render () {
        return (
            <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
                <Submission game='nim' />
            </div>
        );
    }
}

export default Nim;