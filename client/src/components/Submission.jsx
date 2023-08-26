import React, { Component } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-python';
import 'prismjs/themes/prism.css';


const socket = new WebSocket('ws://localhost:3001');

class Submission extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
            code: '',
            lastBrCount: 0,
            game: props.game,
            fileTitle: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.adjustTextAreaHeight = this.adjustTextAreaHeight.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
    }


    handleChange = (event) => {
        // this.setState({code: event.target.value}, () => {
        //     this.adjustTextAreaHeight();
        // });

        this.setState({code: event.target.code});
    }

    handleTitleChange = (event) => {
        this.setState({fileTitle: event.target.value});
    }

    adjustTextAreaHeight = () => {
        const textArea = this.textAreaRef;
        textArea.style.height = 'auto';
        textArea.style.height = `${textArea.scrollHeight}px`;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.code.trim() === '') alert('No code submitted');
        else if (this.state.fileTitle.trim() === '') alert('Please enter a file name (without any file extension type)');
        else {
            let codeSubmission = {
                title: this.state.fileTitle,
                game: this.state.game,
                code: this.state.code
            };
            let message = {
                type: 'codeSubmission',
                data: codeSubmission
            }
            socket.send(JSON.stringify(message));
            window.location.href = '/submission'
        }
    }

    

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='ml-3 mt-5 pb-56'>
                    <header className='text-3xl font-display'>
                        Submit your program here:
                    </header>

                    <input 
                        className='bg-slate-200 hover:bg-slate-300 mt-4 mb-7 outline:none outline-none ' 
                        placeholder='File Name Here'
                        style={{ textAlign: 'center' }}
						onChange={this.handleTitleChange}
                    />

                    <Editor
                        value={this.state.code}
                        onValueChange={(code) => this.setState({ code })}
                        highlight={code => highlight(code, languages.python, 'python')}
                        padding={20}
                        placeholder='Code Here'
                        style={{
                            fontFamily: '"Fira code", "Fira Mono", monospace',
                            fontSize: 16,
                        }}
                        className='border border-black bg-slate-300'
                    />
                    <br />
					<button className='py-2 px-4 bg-green-400 text-white text-xl hover:bg-green-500 rounded border-b-4 border-green-600 hover:border-green-800 mt-4'>
						Submit
					</button>
                </div>
            </form>
        );
    }
}

export default Submission;