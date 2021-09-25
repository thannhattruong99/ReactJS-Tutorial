import React from "react";
import Child from "./Demo2";

export const DemoContext = React.createContext()

export default class Parent extends React.Component{
    render(){
        return(
            <DemoContext.Provider value="Subject from paren">
                <Child />
            </DemoContext.Provider>
        )
    }
    
}
