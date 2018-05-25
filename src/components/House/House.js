import React, {Component} from 'react';
import './House.css';
import axios from 'axios';
import MdClose from 'react-icons/lib/md/close';
import TiEye from 'react-icons/lib/ti/eye';
import { Link } from 'react-router-dom';

class House extends Component {
   constructor() {
    super();
    this.state = {
        doEdit: false,
        name: '',
        address: '',
        city: '',
        state: '',
        zipcode: ''
    }
    this.handleEditChange = this.handleEditChange.bind(this);
    this.editHouse = this.editHouse.bind(this);  
    this.deleteHouse = this.deleteHouse.bind(this);  
   } 
   deleteHouse() {
        axios.delete(`/api/houses/${this.props.id}`)
        .then(res => {
            console.log(res.data.message);
        }).catch(err => console.log('Edit House Error----------', err));
    }
   editHouse() {
       const { name, address, city, state, zipcode } = this.state;
       axios.put(`/api/houses/${this.props.id}`, { name, address, city, state, zipcode })
       .then(res => {
           console.log(res.data.house);
       }).catch(err => console.log('Edit House Error----------', err));
   }
    handleEditChange(type, value) {
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
       const { handleEditChange } = this;
       const { doEdit } = this.state;
        return (
            <div className='house-div'>
                <div className='image-div'>
                    <img src={'' || this.props.imageurl} />
                </div>
                <div className='description-div'>
                    <MdClose className='close-icon' onClick={this.deleteHouse}/>                
                    <p>Property Name: {this.props.name}</p> 
                    <p>Address: {this.props.address}</p> 
                    <p>City: {this.props.city}</p> 
                    <p>State: {this.props.state}</p> 
                    <p>Zip: #{this.props.zip}</p>             
                    <button onClick={() => this.setState({doEdit: !this.state.doEdit})}>Edit?</button>
                    <button className='see-button'
                    ><Link to={`/houses/${this.props.id}`}><TiEye className='see-icon'/></Link></button>
                    <form style={{display: doEdit ? 'inline-block' : 'none'}}>
                        <p>Name</p>
                        <input type='text' onChange={e => handleEditChange('name', e.target.value)} />
                        <p>Address</p>
                        <input type='text' onChange={e => handleEditChange('address', e.target.value)} />
                        <p>City</p>
                        <input type='text' onChange={e => handleEditChange('city', e.target.value)} />
                        <p>State</p>
                        <input type='text' onChange={e => handleEditChange('state', e.target.value)} />
                        <p>Zipcode</p>
                        <input type='text' onChange={e => handleEditChange('zipcode', e.target.value)} />
                        <button onClick={this.editHouse}>Edit</button>
                    </form>
                </div>
            </div>
        );
    }
};

export default House;