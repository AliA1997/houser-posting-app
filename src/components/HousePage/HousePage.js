import React, { Component } from 'react';
import './HousePage.css';
import axios from 'axios';

export default class HousePage extends Component {
    constructor() {
        super();
        this.state = {
            house: null
        }
    }
    //Retrieve the house data from the props, and retrieve that current house data.
    componentDidMount() {
        axios.get(`/api/houses/${this.props.match.params.id}`)
        .then(res => {
            console.log(res.data);
            this.setState({house: res.data.house})
        })
    }
    render() {
        const { house } = this.state;
        console.log('-------House state', house);
        console.log(this.state);
        //If house has data returns the specified house data.
        return (
            <div className='housepage-div'>
                <div className='image-house-div'>
                    <img src={house && house[0].imageurl} alt={house && house[0].name} />
                </div>
                <div className='house-description'>
                    <h1>{house && house[0].name}</h1>
                    <p>Address: {house && house[0].address}</p>
                    <p>Location: {house && house[0].city}, {house && house[0].state}</p>
                    <p>Zipcode: #{house && house[0].zip}</p>                
                </div>
            </div>
        );
    }
}