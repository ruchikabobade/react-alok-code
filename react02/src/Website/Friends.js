import React from 'react'
import axios from 'axios'
import DisplayUser from './DisplayUser';

class Friends extends React.Component {
    
    constructor(){
        console.log("constructor")
        super()
        this.state = {
            remoteUsers:[]
        }

        this.getData = this.getData.bind(this)
        this.delete = this.delete.bind(this)
    }

    componentDidMount(){
        console.log("Mounted")
        this.getData()
    }

    getData(){
        axios.get("http://localhost:8080/employee").then((res) => {
         console.log("success")
         console.log(res)  
         this.setState({remoteUsers:res.data}) 
         console.log("----")
         console.log(this.state.remoteUsers)
        })
    }

    delete(id,index){
        
        console.log(id+""+index)
        axios.delete("http://localhost:8080/employee/"+id)
         const allusers1 = this.state.remoteUsers
        console.log(allusers1)
         allusers1.splice(index,1)
         console.log(allusers1)
        this.setState({remoteUsers : allusers1}) 
    }

    render() { 
        //to iterate through data
        const allusers = this.state.remoteUsers.map((user,index)=>(
            <DisplayUser
                key = {'user-'+user.id}
                myId = {user.id}
                myName = {user.name}
                myAge = {user.age}
                myDept = {user.dept}
                click = {this.delete.bind(this,user.id,index)}>
            </DisplayUser>
        ))
        console.log(allusers)
        return ( 
            <div> 
                <h1>
                    Friends
                </h1>
                {allusers}
                <ul>
                    <li>Jon</li>
                    <li>Dany</li>
                    <li>Arya</li>
                    <li>Sansa</li>
                </ul>
            </div>
         );
    }
}
 
export default Friends;