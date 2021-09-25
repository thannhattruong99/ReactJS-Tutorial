import React from "react";
import API, { AuthAPI, endpoints } from "./API";
import {Link} from 'react-router-dom';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from "react-bootstrap";
import cookies from 'react-cookies'

class Header extends React.Component{
    constructor(){
        super()
        this.state = {'cites': []}
    }
    componentDidMount(){
        AuthAPI.get(endpoints['cites']).then(res =>{
            this.setState({
                'cites': res.data
            })
        })
    }
    render(){
        let user = cookies.load("user")
        
        let r = <>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
        </>

        if(user != null){
            r = <Nav.Link href="/">{user.username}</Nav.Link>
        }

        const s = {
            backgroundColor: 'pink',
            color: 'white'
        }
        return(
            <>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">CFFE-APPLICATION</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                                {this.state.cites.map(c => <Nav.Link href={c.cityName}>{c.cityName}</Nav.Link>)}
                                {r}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <h1>City list</h1>
                <ul style={{color:'yellow', backgroundColor: 'red'}}>
                    {this.state.cites.map(c => <li><Link>{c.cityName}</Link></li>)}
                </ul>
                <ul style={s}>
                    {this.state.cites.map(c => <li><Link>{c.cityName}</Link></li>)}
                </ul>
            </>
        )
    }
}

export default Header