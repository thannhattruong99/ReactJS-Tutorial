import React from "react";
import { Col, Row } from "react-bootstrap";
import { AuthAPI, endpoints } from "./API";
import { Card, Button, Pagination } from "react-bootstrap";
import {Link} from 'react-router-dom';
import queryString from 'query-string'
import cookies from 'react-cookies'

class Body extends React.Component{
    constructor(){
        super()
        this.state = {
            'products': [],
            'totalOfRecord': 0
        }
    }

    loadProduct = (pageNum="0") =>{
        AuthAPI.get(`${endpoints['products']}${pageNum}`, {
            headers:{
                'Authorization': `Bearer ${cookies.load('token')}`
            }
        }).then(res =>{
            console.info(`${endpoints['products']}${pageNum}`)
            this.setState({
                'products': res.data.products,
                'totalOfRecord': res.data.totalOfRecord
            })
        })
    }

    componentDidMount(){
        this.loadProduct()
    }

    componentDidUpdate(){
        let value = queryString.parse(this.props.location.search)
        let page = value.pageNum
        this.loadProduct(page)
    }

    render(){
        let items = []
        for(let i = 0; i < Math.ceil(this.state.totalOfRecord/15); i ++){
            items.push(
                <Pagination.Item><Link to={"/?pageNum=" + (i+1)}>{i+1}</Link></Pagination.Item>
            )
        }
        return(
            <>
                <h1>List of product</h1>
                <Pagination>
                    {items}
                </Pagination>
                <Row>
                    {this.state.products.map(p => <AProduct product={p} />)}  
                </Row>
            </>
        )
    }
}

class AProduct extends React.Component{
    render(){
        return(
            <Col md={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.product.imageUrl} />
                    <Card.Body>
                        <Card.Title>{this.props.product.productName}</Card.Title>
                        <Card.Text>
                            {this.props.product.description}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default Body