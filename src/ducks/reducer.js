//InitialState or the default state of reducer.
const initialState = {
    title: 'Houser',
    nameInput: '',
    addressInput: '',
    cityInput: '',
    stateInput: '',
    zipcodeInput: '',  
    monthly_mortgage_amountInput: '',
    monthly_rentInput: '',
    imageurlInput: ''      
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
    //Use a switch statement on the actions type that is returned by the action creator.
    switch (action.type) {
        case CHANGE_NAME: 
        return {...state, nameInput: action.payload};
        case CHANGE_ADDRESS: 
        return {...state, addressInput: action.payload};
        case CHANGE_CITY: 
        return {...state, cityInput: action.payload};
        case CHANGE_STATE: 
        return {...state, stateInput: action.payload};
        case CHANGE_ZIPCODE: 
        return {...state, zipcodeInput: action.payload};
        case CHANGE_MONTHLY_MORTGAGE_AMOUNT: 
        return {...state, monthly_mortgage_amountInput: action.payload};
        case CHANGE_MONTHLY_RENT: 
        return {...state, monthly_rentInput: action.payload};
        case CHANGE_IMAGEURL: 
        return {...state, imageurlInput: action.payload};
        default: 
        return state;
    }
};

//Define the action creator for handling input changes.
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