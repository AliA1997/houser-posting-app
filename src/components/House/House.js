import React, {Component} from 'react';
import './House.css';
//import axios for axios calls.
import axios from 'axios';
//import action creators from the reducer.
import { handleChange } from '../../ducks/reducer';
import MdClose from 'react-icons/lib/md/close';
import TiEye from 'react-icons/lib/ti/eye';
//import the Link component from react-router-dom.
import { Link } from 'react-router-dom';
//import the connect method from react-redux.
import { connect } from 'react-redux';

class House extends Component {
   constructor() {
    super();
    this.state = {
        doEdit: false,
    }
    this.editHouse = this.editHouse.bind(this);  
    this.deleteHouse = this.deleteHouse.bind(this);  
   } 
   //Axios.delete method that takes from the parent the id of the house to make a delete method to delete that house.
   deleteHouse() {
        return axios.delete(`/api/houses/${this.props.id}`)
        .then(res => {
            console.log(res.data.message);
           //It refreshes the page after the house has been successfully deleted.             
            window.location.reload();
        }).catch(err => console.log('Edit House Error----------', err));
    }
   //Axios.edit method that takes from the parent the id of the house to make a edit method to edit that house. 
    editHouse() {
       const { nameInput, addressInput, cityInput, stateInput, zipcodeInput } = this.props;
       return axios.put(`/api/houses/${this.props.id}`, { nameInput, addressInput, cityInput, stateInput, zipcodeInput })
       .then(res => {
           console.log(res.data.house);
           //It refreshes the page after the house has been successfully updated. 
            window.location.reload();
        }).catch(err => console.log('Edit House Error----------', err));
   }

   render() {
       //Destruct the dispatch from the props.
       const { dispatch } = this.props;
       //Destruct the doEdit from the state.
       const { doEdit } = this.state;
       //Dispatch the action creator from the reducer.
        return (
            <div className='house-div'>
                <div className='image-div'>
                    <img src={'' || this.props.image_url} />
                </div>
                <div className='description-div'>
                    <MdClose className='close-icon' onClick={this.deleteHouse}/>                
                    <p>Property Name: {this.props.name}</p> 
                    <p>Address: {this.props.address}</p> 
                    <p>City: {this.props.city}</p> 
                    <p>State: {this.props.state}</p> 
                    <p>Zip: #{this.props.zip}</p>
                    <p>Monthly Mortgage Amount: ${this.props.mortgage_amount}</p>             
                    <p>Monthly Rent: #{this.props.monthly_rent}</p>                                              
                    <button onClick={() => this.setState({doEdit: !this.state.doEdit})}>Edit?</button>
                    <button className='see-button'
                    ><Link to={`/houses/${this.props.id}`}><TiEye className='see-icon'/></Link></button>
                    <form style={{display: doEdit ? 'inline-block' : 'none'}}>
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
                        <button onClick={this.editHouse}>Edit</button>
                    </form>
                </div>
            </div>
        );
    }
};

//Map state to props.
const mapStateToProps = state => {
    return state;
}

//Use the connect method and double invoke with the Component you would like to connnect to store, 
// and state of reducer. NOTE: last part is optional can be empty.
export default connect(mapStateToProps)(House);