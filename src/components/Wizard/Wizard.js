import React, {Component} from 'react';
import { handleChange } from '../../ducks/reducer';
import { Link } from 'react-router-dom';
//import the connect method from react-redux
import { connect } from 'react-redux';
class Wizard extends Component {
    constructor() {
        super();
    }

    render() {
        console.log(this.props);
        //Destruct the dispatch from props, so can use handleChange action creator to use input changes.
        const { dispatch } = this.props;
        return (
            <form>
                <p>Name</p>
                <input type='text' onChange={e => dispatch(handleChange('name', e.target.value))} />
                <p>Address</p>
                <input type='text' onChange={e => dispatch(handleChange('address', e.target.value))} />
                <p>City</p>
                <input type='text' onChange={e => dispatch(handleChange('city', e.target.value))} />
                <p>State</p>
                <input type='text' onChange={e => dispatch(handleChange('state', e.target.value))} />
                <p>Zipcode</p>
                <input type='text' onChange={e => dispatch(handleChange('zipcode', e.target.value))} />
                <button><Link to='/wizard/steptwo'>Next Step</Link></button>
            </form>
        );
    }
};
//Map the state of reducer to props.
const mapStateToProps = state => {
    return state;
}

// const mapDispatchToProps = {
//     handleChange
// }

//Use connect and double invoke using the component and state of reducer.
export default connect(mapStateToProps)(Wizard);