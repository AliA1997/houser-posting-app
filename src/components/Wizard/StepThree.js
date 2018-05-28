import React, {Component} from 'react';
//Use for creating a new house.
import axios from 'axios';
//import the action creator to handle input changes 
import { handleChange } from '../../ducks/reducer';
import { Link } from 'react-router-dom';
//import connect to connect component to store.
import { connect } from 'react-redux';

class StepThree extends Component {
    constructor() {
        super();
        //Bind the createHouse to component since props is returned undefined when not bind.
        this.createHouse = this.createHouse.bind(this);
    }
    createHouse() {
        const { nameInput, addressInput, cityInput, stateInput, zipcodeInput, imageurlInput, 
            monthly_mortgage_amountInput, monthly_rentInput } = this.props;
        axios.post('/api/houses', { nameInput, addressInput, cityInput, stateInput, zipcodeInput,
             imageurlInput, monthly_mortgage_amountInput, monthly_rentInput })
        .then(res => {
            console.log(res.data.newHouse);
        }).catch(err => console.log('Axios Post House Error----------', err));
    }
    render() {
        const { dispatch } = this.props;
        return (
            <form>
                <p>Monthly Mortgage Amount</p>
                <input type='text' onChange={e => dispatch(handleChange('mortgage', e.target.value))} />
                <p>Desired Monthly Rent</p>
                <input type='text' onChange={e => dispatch(handleChange('rent', e.target.value))} />
                <button onClick={this.createHouse}>Complete</button>
            </form>
        );
    }
};

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(StepThree);