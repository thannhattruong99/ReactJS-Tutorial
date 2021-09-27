import React, { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { Redirect } from "react-router"
import API, { AuthAPI, endpoints } from "./API"
import cookies from 'react-cookies'
import { useDispatch } from "react-redux"


export default function Login(){
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [isLogged, setLogged] = useState(false)
    const dispatch = useDispatch()

    const login = async (event) =>{
        event.preventDefault()
        let res = await API.post(endpoints['login'],{
          'username': username,
          'password': password
        })
          
        cookies.save("token", res.data.token)
    
        //'Authorization': `Bearer ${cookies.load('token')}`
        //khai báo ở đây để nạp lại token
        let user = await AuthAPI.get(endpoints['user-detail']+ username, {
            headers:{
                'Authorization': `Bearer ${cookies.load('token')}`
            }
        })
    
        console.info("user.data: " + user.data)
        cookies.save("user", user.data)

        dispatch({
          "type": "login",
          "payload": user.data
        })

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