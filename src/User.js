import React from 'react'
import UserInfo from './UserInfo'


class User extends React.Component{
    // eslint-disable-next-line
    constructor(props){
        super(props)

        // Use it without arrow function
        // this.hello = this.hello.bind(this)
    }

    // wihtout arrow function
    // hello()

    // arrow function need no this.hello = this.hello.bind(this)
    hello = (country) =>{
        alert(`Welcome ${this.props.firstName} ${this.props.lastName} - ${country}`)
    }

    // <React.Fragment>
    render(){
        return(
            <>
                <h1>Welcome to ReactJS</h1>
                <h2>ReactFragment Test</h2>
                <h3>Welcome {this.props.firstName} {this.props.lastName}</h3>
                <input type="button" value="Click me" onClick={() => this.hello("Viet Nam")} />
            </>
        )
    }
}

export default User