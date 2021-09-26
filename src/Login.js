import React, { useContext, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { Redirect } from "react-router"
import { UserContext } from "./App"


export default function Login(){
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [isLogged, setLogged] = useState(false)
    const auth = useContext(UserContext)
    // useEffect(() =>{
    //     console.info("Test")
    //     console.info(Math.random())
    // })

    const login = async (event) =>{
        event.preventDefault()
        auth.login(username, password)
        setLogged(true)
    }

    if(isLogged)
        return <Redirect to="/" />
    else    
        return(
            <>
                <h1 className="text-center text-danger">Login</h1>
                <Form onSubmit={login}>
                    <LoginForm id="username" type="text" field={username} change={event => setUsername(event.target.value)}/>
                    <LoginForm id="password" type="password" field={password} change={event => setPassword(event.target.value)}/>
                    <Button type="submit">Login</Button>
                </Form>
                
                <h1>Hello {username}</h1>
            </>
        )
}

class LoginForm extends React.Component{
    render(){
        return(
            <Form.Group controlId={this.props.id}>
                <Form.Label>{this.props.label}</Form.Label>
                <Form.Control type={this.props.type} value={this.props.field} 
                    onChange={this.props.change}
                />
            </Form.Group>
        )
    }
}