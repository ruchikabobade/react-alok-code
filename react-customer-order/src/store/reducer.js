// import actionTypes from './action'
import axios from 'axios'

// const initialState = {
//     // customers: []
//     age:0
// }

const initialState = {
    customers: [],
    age:0
}
const reducer = (state=initialState, action) => {
    
    if(action.type === 'INCREMENT'){
        console.log("reducer")
        return {
            
            age: state.age + 1
        }
    }

    if(action.type === 'ADD_CUSTOMER'){
        console.log(action.customerData.name)
        console.log("hey")

        const newCustomer = {
            name: action.customerData.name,
            addressLine1: action.customerData.addressLine1,
            addressLine2: action.customerData.addressLine2,
            postCode: action.customerData.postCode,
            age: action.customerData.age

        }

        console.log(newCustomer)
        // axios.post("https://localhost:8080/customer/add",this.newCustomer)
        axios.post("https://customer-service-madhu.cfapps.io/customers",newCustomer)
        
        return {
            ...state,
            customers: state.customers.concat(newCustomer)
            
        }
    }

    return state;
};

export default reducer