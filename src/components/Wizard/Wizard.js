import React, {Component} from 'react';
import { handleChange } from '../../ducks/reducer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
class Wizard extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',            
        }
        this.handleChange = this.handleChange.bind(this);
        this.createHouse = this.createHouse.bind(this);
    }
    createHouse() {
        const { name, address, city, state, zipcode } = this.state;
        axios.post('/api/houses', { name, address, city, state, zipcode })
        .then(res => {
            console.log(res.data.newHouse);
        }).catch(err => console.log('Axios Post House Error----------', err));
    }
    handleChange(type, value) {
        console.log(value);
        switch(type) {
            case 'name':
            return this.setState({name: value})
            case 'address':
            return this.setState({address: value})
            case 'city':
            return this.setState({city: value})
            case 'state':
            return this.setState({state: value})
            case 'zipcode':
            return this.setState({zipcode: value})
            default:
            return;
        }
    }
    render() {
        console.log(this.props)
        const { handleChange } = this;
        return (
            <form>
                <p>Name</p>
                <input type='text' onChange={e => handleChange('name', e.target.value)} />
                <p>Address</p>
                <input type='text' onChange={e => handleChange('address', e.target.value)} />
                <p>City</p>
                <input type='text' onChange={e => handleChange('city', e.target.value)} />
                <p>State</p>
                <input type='text' onChange={e => handleChange('state', e.target.value)} />
                <p>Zipcode</p>
                <input type='text' onChange={e => handleChange('zipcode', e.target.value)} />
                <button onClick={this.createHouse}>Create House</button>
                <button><Link to='/wizard/steptwo'>Next Step</Link></button>
            </form>
        );
    }
};

const mapStateToProps = state => {
    return state;
}
// const mapDispatchToProps = {
//     handleChange
// }

export default connect(mapStateToProps)(Wizard);