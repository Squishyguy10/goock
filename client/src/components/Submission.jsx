import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';

const socket = new WebSocket('ws://localhost:3001');

class Submission extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
            value: '',
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
        this.setState({value: event.target.value}, () => {
            this.adjustTextAreaHeight();
        });
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
		let codeSubmission = {
			title: this.state.fileTitle,
			game: this.state.game,
			code: this.state.value
		};
		let message = {
			type: "codeSubmission",
			data: codeSubmission
		}
		socket.send(JSON.stringify(message));
        alert('basgoong');
    }

    postSubmitLink() {
        return this.state.game + '/submit';
    }

    

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="ml-3 mt-5">
                    <header className="text-3xl font-display">
                        Submit your program here:
                    </header>

                    <input 
                        className='bg-slate-200 hover:bg-slate-300 mt-4 outline:none outline-none' 
                        placeholder='File Name Here'
						onChange={this.handleTitleChange}
                    />

                    <textarea 
                        ref={(ref) => (this.textAreaRef = ref)}
                        className='bg-slate-200 hover:bg-slate-300 mt-4 outline:none outline-none' 
                        rows='20'
                        cols='150'
                        value={this.state.value} 
                        onChange={this.handleChange}
                        placeholder='Code Here'
                    />
                    <br />
                    <Link to={this.postSubmitLink()}>
                        <button className='py-2 px-4 bg-green-400 text-white text-xl hover:bg-green-500 rounded border-b-4 border-green-600 hover:border-green-800 mt-4'>
                            Submit
                        </button>
                    </Link>

                </div>
            </form>
        );
    }
}

export default Submission;