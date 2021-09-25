import React from "react";
import { DemoContext } from "./Demo1";

export default class Child extends React.Component{
    render(){
        return(
            <DemoContext.Consumer>
                {value => <h1>{value}</h1>}
            </DemoContext.Consumer>
        )
    }
}