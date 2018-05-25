import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { handleChange } from '../../ducks/reducer';
import { connect } from 'react-redux';

class StepTwo extends Component {
    constructor() {
        super();
    }
    render() {
    const { dispatch } = this.props;
        return (
            <form>
                <p>Imageurl</p>
                <input type='text' onChange={e => dispatch(handleChange('imageurl', e.target.value))} />
                <button><Link to='/wizard/stepthree'>Next Step</Link></button>
            </form>
        );
    }
};
const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(StepTwo);