import React from 'react'

class User extends React.Component{
    // eslint-disable-next-line
    constructor(props){
        super(props)

        // Use it without arrow function
        this.hello = this.hello.bind(this)
        this.state = {
            'name': ''
        }
    }

    // wihtout arrow function
    // hello()
    // arrow function need no this.hello = this.hello.bind(this)
    hello(country){
        alert(`Welcome ${this.props.firstName} ${this.props.lastName} - ${country}`)
    }

    submitForm = () =>{

    }

    change = (event) =>{
        this.setState({'name': event.target.value})
    }

    // <React.Fragment>
    render(){
        return(
            <>
                <form onSubmit={this.submitForm}>
                    <input type="text" value={this.state.name} 
                    onChange={this.change}
                    placeholder="Input name..."/>
                    <input type="submit" value="Click"/>
                </form>
                <h1>Welcome {this.state.name}</h1>
                <h2>ReactFragment Test</h2>
                <h3>Welcome {this.props.firstName} {this.props.lastName}</h3>
                <input type="button" value="Click me" onClick={this.hello.bind(this, "Viet Nam")} />
            </>
        )
    }
}

export default User