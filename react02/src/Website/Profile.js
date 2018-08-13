import React from 'react'

class Profile extends React.Component {
    
    render() { 
        return (
            <div>
                <h1>Profile</h1>
                <table>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Amlan</td>
                        <td>Delhi</td>
                        <td>10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default Profile;