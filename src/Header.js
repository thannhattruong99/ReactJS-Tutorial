import React from "react";
import API, { endpoints } from "./API";
import {Link} from 'react-router-dom';

class Header extends React.Component{
    constructor(){
        super()
        this.state = {'cites': []}
    }
    componentDidMount(){
        API.get(endpoints['cites']).then(res =>{
            this.setState({
                'cites': res.data
            })
        })
    }
    render(){
        return(
            <>
                <ul>
                    {this.state.cites.map(c => <li><Link>{c.cityName}</Link></li>)}
                </ul>
            </>
        )
    }
}

export default Header