import React, {Component} from 'react';
import './CommentButton.css';

class CommentButton extends Component{

    componentWillMount(){
        console.log("will mount");
    }
    componentDidMount(){
        console.log("DID mount");
    }
    componentDidUpdate(){
        console.log("DID update");
    }
    componentWillUpdate(){
        console.log("WILL update")
    }
    componentWillReceiveProps(){
        console.log("WILL RECEIVE")
    }
    componentWillUnmount(){
        console.log("Will Unmount")
    }
    constructor(){
        console.log("constructor")
        super()
        this.state = {
            counter:0,
            message:"Default"
        }

        this.z = this.z.bind(this)
        this.y = this.y.bind(this)
    }

    z(){
        console.log("Alok")
        this.state.counter = this.state.counter + 1
        this.state.message = "Thanks"
        // this.setState({counter:this.state.counter+1})
        this.setState({message:this.state.message+"---"+this.state.counter})
    }

    y(e){
        console.log("submit clicked")
        console.log(e.target.value)
    }
    render(){
        return(
            <div>
                <button onClick={this.z} className="btn btn-success">Click</button>
                <h3>{this.state.counter}</h3>
                <h3>{this.state.message}</h3>

                <input onChange={this.y} name="name" type="text" ></input>
                <button className="btn btn-primary">Submit</button>
            </div>
        );
    }
}

export default CommentButton;