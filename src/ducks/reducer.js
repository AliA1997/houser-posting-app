
const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',  
    monthly_mortgage_amount: '',
    monthly_rent: '',
    imageurl: ''      
};

//Action types
const CHANGE_NAME = 'CHANGE_NAME';
const CHANGE_ADDRESS = 'CHANGE_ADDRESS';
const CHANGE_CITY = 'CHANGE_CITY';
const CHANGE_STATE = 'CHANGE_STATE';
const CHANGE_ZIPCODE = 'CHANGE_ZIPCODE';
const CHANGE_IMAGEURL = 'CHANGE_IMAGEURL';
const CHANGE_MONTHLY_MORTGAGE_AMOUNT = 'CHANGE_MONTHLY_MORTGAGE_AMOUNT';
const CHANGE_MONTHLY_RENT = 'CHANGE_MONTHLY_RENT';


export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NAME: 
        return {...state, name: action.payload};
        case CHANGE_ADDRESS: 
        return {...state, address: action.payload};
        case CHANGE_CITY: 
        return {...state, city: action.payload};
        case CHANGE_STATE: 
        return {...state, state: action.payload};
        case CHANGE_ZIPCODE: 
        return {...state, zipcode: action.payload};
        case CHANGE_MONTHLY_MORTGAGE_AMOUNT: 
        return {...state, monthly_mortgage_amount: action.payload};
        case CHANGE_MONTHLY_RENT: 
        return {...state, monthly_rent: action.payload};
        case CHANGE_IMAGEURL: 
        return {...state, imageurl: action.payload};
        default: 
        return state;
    }
};

export function handleChange(type, value) {
    switch(type) {
        case 'name':
        return {
            type: CHANGE_NAME,
            payload: value 
        }
        case 'address':
        return {
            type: CHANGE_ADDRESS,
            payload: value 
        }
        case 'city':
        return {
            type: CHANGE_CITY,
            payload: value 
        }
        case 'state':
        return {
            type: CHANGE_STATE,
            payload: value 
        }
        case 'zipcode':
        return {
            type: CHANGE_ZIPCODE,
            payload: value 
        }
        case 'imageurl':
        return {
            type: CHANGE_IMAGEURL,
            payload: value 
        }
        case 'mortgage':
        return {
            type: CHANGE_MONTHLY_MORTGAGE_AMOUNT,
            payload: value 
        }
        case 'rent':
        return {
            type: CHANGE_MONTHLY_RENT,
            payload: value 
        }
        default:
        return value;
    }
}