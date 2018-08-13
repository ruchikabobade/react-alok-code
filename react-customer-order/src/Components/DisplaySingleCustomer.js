import React from 'react'

class DisplaySingleCustomer extends React.Component{

    render(){
        return (
            <div>
                <p>
                    {this.props.name}, {this.props.addressLine1}, {this.props.addressLine2}, {this.props.postCode}, {this.props.age}
                </p>
            </div>
        )
    }
}

export default DisplaySingleCustomer