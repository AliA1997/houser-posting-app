import React, {Component} from 'react';
import axios from 'axios';
import { handleChange } from '../../ducks/reducer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class StepThree extends Component {
    constructor() {
        super();
        this.createHouse = this.createHouse.bind(this);
    }
    createHouse() {
        const { name, address, city, state, zipcode, imageurl, monthly_mortgage_amount, monthly_rent } = this.props;
        axios.post('/api/houses', { name, address, city, state, zipcode, imageurl, monthly_mortgage_amount, monthly_rent })
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