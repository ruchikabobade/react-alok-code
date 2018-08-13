import React from 'react'

class DisplayUser extends React.Component {
    
    render() { 
        return (  
            <div> 
                <p onClick={this.props.click}>
                {this.props.myId} {this.props.myName}, {this.props.myAge}, {this.props.myDept}
                </p>
            </div>
        );
    }
}
 
export default DisplayUser;