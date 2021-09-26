import React, { useContext, useEffect, useState } from "react";
import { AuthAPI, endpoints } from "./API";
import {Link} from 'react-router-dom';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from "react-bootstrap";
import cookies from 'react-cookies'
import { UserContext } from "./App";

export default function Header (){
    const [cites, setCites] = useState([])
    const auth = useContext(UserContext)
    
    useEffect(() =>{
        AuthAPI.get(endpoints['cites'],{
            headers:{
                'Authorization': `Bearer ${cookies.load('token')}`
            }
        }).then(res =>{
            setCites(res.data)
        })
    })
    
    var user = auth.user
    if(user == null)
        user = cookies.load("user")
    
    let r = <>
        <Nav.Link href="/register">Register</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
    </>

    if(user != null){
        r = <Nav.Link href="/">Welcome {user.userName}!!!</Nav.Link>
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
                            {cites.map(c => <Nav.Link href={c.cityName}>{c.cityName}</Nav.Link>)}
                            {r}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <h1>City list</h1>
            <ul style={{color:'yellow', backgroundColor: 'red'}}>
                {cites.map(c => <li><Link>{c.cityName}</Link></li>)}
            </ul>
            <ul style={s}>
                {cites.map(c => <li><Link>{c.cityName}</Link></li>)}
            </ul>
        </>
    )
    
}

// export default Header