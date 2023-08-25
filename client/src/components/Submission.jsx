import React, { Component } from 'react';

class Submissions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        alert(this.state.value);
        event.preventDefault();
    }
    

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="ml-3 mt-5">
                    <header className="text-xl">
                        Submit your program here:
                    </header>

                    <textarea className="bg-slate-200 hover:bg-slate-300 mt-4 outline:none outline-none" value={this.state.value} onChange={this.handleChange} />
                    <br/>
                    <button className="py-2 px-4 bg-green-400 text-white text-xl hover:bg-green-500 rounded border-b-4 border-green-600 hover:border-green-800 mt-4">
                        Submit
                    </button>

                </div>
            </form>
        );
    }
}

export default Submissions;