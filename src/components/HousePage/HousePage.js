import React, { Component } from 'react';

export default class HousePage extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                HousePage 
                <h1>{this.props.match.params.id}</h1>
            </div>
        );
    }
}