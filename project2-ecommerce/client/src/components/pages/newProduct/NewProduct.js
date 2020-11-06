import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import productService from '../../../service/products.service'

class NewProduct extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            price: '',
            stock: '',
        }
        this.productService = new productService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()

        this.productService
            .saveProduct(this.state)
            .then(() => {
                this.props.closeModal()
                this.props.refreshList()
            })
            .catch(err => console.log('Error!!', { err }))
    }

    render() {

        return (

            <Form onSubmit={this.handleFormSubmit}>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="text" name="price" value={this.state.price} onChange={this.handleInputChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Stock</Form.Label>
                    <Form.Control type="text" name="stock" value={this.state.stock} onChange={this.handleInputChange} />
                </Form.Group>

                <Button variant="dark" type="submit">Crear producto</Button>
            </Form>
        )
    }
}

export default NewProduct