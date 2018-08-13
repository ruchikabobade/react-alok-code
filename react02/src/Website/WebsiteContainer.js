import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'
import Friends from './Friends'
import Profile from './Profile'
import {HashRouter, NavLink, Route} from 'react-router-dom'

class Website extends React.Component {
    
    render() { 
        return ( 
            <HashRouter>
            <div>
                <h1>
                    This is the container of React.
                </h1>
                <div className="header1">
                    <ul>
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/friends">Friends</NavLink></li>
                        <li><NavLink to="/profile">Profile</NavLink></li>                    
                    
                    </ul>
                </div>
                <div className="content1">
                    <Route exact path="/" component={Home}></Route>            
{/* <Route path="/" component={}></Route>                 */}
                    <Route path="/friends" component={Friends}></Route>
                    <Route path="/profile" component={Profile}></Route>
                </div>
            </div> 
            </HashRouter>               
         );
    }
}
 
export default Website;