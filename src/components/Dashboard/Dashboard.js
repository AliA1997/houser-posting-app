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
    //If is best practice to run axios calls in your component right after the component mounts
    //This is when the componentDidMount() method comes in.
    componentDidMount() {
        axios.get('/api/houses').then(res => {
            this.setState({houses: res.data.houses});
        });
    }
    render() {
        //Returns the houses state if it is valid if not doesn't render them.
        return (
            <div>
                {this.state.houses && this.state.houses.map((house, i) => <li key={i}><House {...house} /></li>)}
            </div>
        );
    }
}