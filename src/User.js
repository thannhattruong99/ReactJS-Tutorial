import React from 'react'
import UserInfo from './UserInfo'


class User extends React.Component{
    // eslint-disable-next-line
    constructor(props){
        super(props)

        this.user =[{
            "id": 1,
            "name": "Than Nhat Truong 1"
        }, {
            "id": 2,
            "name": "Than Nhat Truong 2"
        }, {
            "id": 3,
            "name": "Than Nhat Truong 3"
        }]

        this.state = {
            "name": ""
        }
    }

    change = (event) =>{
        this.setState({
            "name": event.target.value
        })
    }

    // <React.Fragment>
    render(){
        return(
            <>
                <h1>Welcome to ReactJS</h1>
                <h2>ReactFragment Test</h2>
                <h3>Welcome {this.props.firstName} {this.props.lastName}</h3>
                <ul>
                    {this.user.map(u => <li>{u.id} - {u.name}</li>)}
                </ul>
                <ul>
                    {this.user.map(u => <UserInfo user={u} />)}
                </ul>
                <div>
                    <input type="text" value={this.state.name} 
                        onChange={this.change} />
                    <h1>Welcome {this.state.name}</h1>
                </div>
            </>
        )
    }
}

export default User