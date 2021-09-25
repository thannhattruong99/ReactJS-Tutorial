import React from "react";
import { Form, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import API, { endpoints } from "./API";

class Register extends React.Component{
    constructor(){
        super()
        this.user ={
            'fullName': '',
            'identifyCard': '',
            'phone': '',
            'email': '',
            'birthDate': '',
            'gender': '',
            'imageURL': '',
            'address': '',
            'districtId': ''

        }
        this.state = {
            'user': this.user
        }
    }

    change = (field, event) =>{
        this.user[field] = event.target.value
        this.setState({
            'user': this.user
        })
    } 

    register = (event) =>{
        if(this.state.user.fullName !== ''){
            const requestForm = new FormData()
            for (let k in this.state.user){
                console.info('k: ' + k + '- value: ' + this.state.user[k])
                requestForm.append(k, this.state.user[k])
            }

            console.info('form data: ' + requestForm)    
            API.post(endpoints['user'], requestForm).then((res) =>{
                console.info(res.data)
            }).catch(err => console.error(err))
        }
       event.preventDefault();
    }

    render(){
        return(
            <>
                <h1 class="text-center text-danger">Create account form</h1>
                <Form onSubmit={this.register}> 
                    <RegisterForm id="fullName" label="Full Name" type="text" field={this.state.fullName} change={this.change.bind(this, 'fullName')} />
                    <RegisterForm id="identifyCard" label="Identity Card" type="text" field={this.state.identifyCard} change={this.change.bind(this, 'identifyCard')} />
                    <RegisterForm id="phone" label="Phone" type="tel" field={this.state.phone} change={this.change.bind(this, 'phone')} />
                    <RegisterForm id="email" label="email" type="text" field={this.state.email} change={this.change.bind(this, 'email')} />
                    <RegisterForm id="birthDate" label="Birth Date" type="date" field={this.state.birthDate} change={this.change.bind(this, 'birthDate')} />
                    <RegisterForm id="gender" label="Gender" type="text" field={this.state.gender} change={this.change.bind(this, 'gender')} />
                    <RegisterForm id="imageURL" label="ImageURL" type="text" field={this.state.imageURL} change={this.change.bind(this, 'imageURL')} />
                    <RegisterForm id="address" label="Address" type="text" field={this.state.address} change={this.change.bind(this, 'address')} />
                    <RegisterForm id="districtId" label="District Id" type="text" field={this.state.districtId} change={this.change.bind(this, 'districtId')} />
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
            </>
        )
    }
}

export default Register

class RegisterForm extends React.Component{
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