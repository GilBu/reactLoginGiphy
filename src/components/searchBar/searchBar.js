import React, { Component } from 'react';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = { term: '' }

        this.termChange = this.termChange.bind(this);
    }

    termChange(event) {
      this.setState({term: event.target.value})
    }

    onInputChange() {
        this.props.onClick(this.state.term);
    }

    render() {
        return (
            <div className="search">
                <input onChange={this.termChange}/>
                <button  onClick={event => this.onInputChange()}>Get gifs</button>
            </div>
        );
    }
}

export default SearchBar;
