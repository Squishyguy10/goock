import React, { Component } from 'react';

class Submissions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: "Pease submit your code here:"
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
                <label>
                    Submit your program here:
                    <textarea value={this.state.code} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Submissions;