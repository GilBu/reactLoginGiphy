import React, { Component } from 'react';
import GifList from '../gifList/gifList';
import SearchBar from '../searchBar/searchBar';
import request from 'superagent';

class GiphyList extends Component {
    constructor() {
        super();

        this.state = {
            gifs: [],
            term: ''
        }
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    handleTermChange(aterm) {
      const api_key = '36ulVZPFFmbZmwNzhLuwWPCKcUgQKjVc';
      const url = `http://api.giphy.com/v1/gifs/search?q=${aterm}&api_key=${api_key}`;
      request.get(url, (err, res) => {
            this.setState({gifs: res.body.data});
        });
    }

    render() {
        return (
            <div>
                <SearchBar onClick={this.handleTermChange} />
                <GifList gifs={this.state.gifs} />
            </div>
        );
    }
}
export default GiphyList;
