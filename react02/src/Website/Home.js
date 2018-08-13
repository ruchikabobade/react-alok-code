import React from 'react'
import axios from 'axios'

class Home extends React.Component {
    
    constructor(){
        super();
        this.state ={
            name:'',
            age:'',
            dept:''
        }
    
        this.captureName = this.captureName.bind(this)
        this.captureAge = this.captureAge.bind(this)
        this.captureDept = this.captureDept.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    captureName(e){
        console.log(e.target.value)
        this.setState({name:this.state.name = e.target.value})
    }
    captureAge(e){
        console.log(e.target.value)
        this.setState({age:this.state.age = e.target.value})
    }
    captureDept(e){
        console.log(e.target.value)
        this.setState({dept:this.state.dept = e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        console.log(this.state)

        axios.post("http://localhost:8080/employee/",this.state)

        /* axios.get("http://localhost:8080/employee/").then((res)=>{
            console.log(res.data)
        })
 */
        // axios.post("http://localhost:3000/users",this.state)
    }

    /* delete(){
        axios.delete("http://localhost:8080/employee/0")
    } */
    render() { 
        return ( 
            <div>
                <h1>
                    You are Home
                </h1>
                <form>
                
                Name: <input type="text" name="name" value={this.state.name} onChange={this.captureName}/><br/>
                Age: <input type="text" name="age" value={this.state.age} onChange={this.captureAge}/><br/>
                Dept: <input type="text" name="dept" value={this.state.dept} onChange={this.captureDept}/><br/>

                <button type="submit" onClick={this.onSubmit}>Add</button>
                </form>
                <button type="submit" onClick={this.delete}>Delete</button>
            </div>
        );
    }
}
 
export default Home;