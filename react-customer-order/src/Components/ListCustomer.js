import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import DisplaySingleCustomer from './DisplaySingleCustomer'
import axios from 'axios'

class ListCustomer extends React.Component{

    // state = {
    //     age:0
    // }

    // check(){
    //     console.log(this.state.age)
    // }
    constructor(){
        super()
        this.state = {
            allCustomers:[]
        }
        this.getCustomers = this.getCustomers.bind(this)
    }
    componentDidMount(){
        this.getCustomers()
    }

    getCustomers(){
        axios.get("https://customer-service-madhu.cfapps.io/customers").then((res)=>{
            console.log(res.data)
            this.setState({allCustomers:res.data})
            console.log(this.state.allCustomers)
        })
        // axios.get("https://localhost:8080/customer/getAllCustomer").then((res)=>{
        //     console.log(res)
        // })
        
    }

    render(){
        return(
            <div>
                Z
                <button type="submit" onClick={this.props.increment}>INC</button>
                <input type="text" value={this.props.ctr}/><br/>
                Z<br/>

                {this.state.allCustomers.map(customer => (
                    <DisplaySingleCustomer name={customer.name}
                                            addressLine1={customer.addressLine1}
                                            addressLine2={customer.addressLine2}
                                            postCode = {customer.postCode}
                                            age = {customer.age}/>
                ))}
               
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        ctr : state.age,
        cust: state.customers
    };
};

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({type:'INCREMENT'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCustomer)