import React, { Component } from 'react';

class Submissions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({code: event.target.code});
    }

    handleSubmit(event) {
        alert(this.state.code);
        event.preventDefault();
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="ml-3 mt-5">
                    <header className="text-xl">
                        Submit your program here:
                    </header>

                    <textarea className="bg-slate-300 hover:bg-slate-400 mt-4" value={this.state.code} onChange={this.handleChange} />
                    <br></br>
                    <input type="submit" value="Submit" className="py-2 px-4 bg-blue-400 text-white text-xl hover:bg-blue-500 rounded border-b-4 border-blue-600 hover:border-blue-800 mt-4"/>

                </div>
            </form>
        );
    }
}

export default Submissions;