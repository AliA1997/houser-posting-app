import React, { Component } from 'react';
import House from '../House/House';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            houses: [],
        }
    }
    componentDidMount() {
        axios.get('/api/houses').then(res => {
            this.setState({houses: res.data.houses});
        });
    }
    render() {
        return (
            <div>
                {this.state.houses && this.state.houses.map((house, i) => <li key={i}><House {...house} /></li>)}
            </div>
        );
    }
}