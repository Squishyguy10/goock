import React, { Component } from 'react';
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-python';
import 'prismjs/themes/prism.css';

class Sample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            code: 'import random\n\nwhile True:\n\tboard = input()\n\tprint(random.choice([i for i, char in enumerate(board) if char == " "]))',
        };
    }

    render() {
        return (
            <div className="bg-amber-100">
                <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
                    <div className='flex flex-col w-full mb-20'>
                        <MagnifyingGlassIcon className='mx-auto inline-block w-10 mb-4' />
                        <h1 className='sm:text-4xl text-2xl pt-2 font-medium title-font font-display'>
                            Tic Tac Toe Sample Input
                        </h1>

                        <p className='pt-8 text-wrap'>
                            The following is a sample code for Tic Tac Toe. Note that this program does not actually provide a winning solution,
                            but is instead just a basis for what your program may look like. 
                        </p>

                        <Editor
                            readOnly
                            value={this.state.code}
                            highlight={code => highlight(code, languages.python, 'python')}
                            padding={20}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 16,
                            }}
                            className='border border-black bg-slate-300 mt-20 mb-72'
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Sample;