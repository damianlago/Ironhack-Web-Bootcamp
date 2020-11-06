import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import productService from '../../../service/products.service'
import ProductCard from './ProductCard'
import NewProductForm from './../newProduct/NewProduct'

class ProductsList extends Component {
    constructor() {
        super()
        this.state = {
            products: [],
            showModal: false
        }
        this.productService = new productService()
    }

    componentDidMount = () => this.loadProducts()

    loadProducts = () => {
        this.productService
            .getAllProducts()
            .then(response => this.setState({ products: response.data }))
            .catch(err => console.log('Error:', err))
    }

    handleModal = showModal => this.setState({ showModal })

    render() {
        return (
            <>
                <Container>
                    <main>
                        <Button onClick={() => this.handleModal(true)} style={{ marginBottom: '20px' }} variant="dark" size="sm">Crear montaña rusa</Button>
                        <Row>
                            {this.state.products.map(elm =>
                                <Col key={elm._id} className="mb-5 col-xs-2 col-md-3 col-lg-3 col-lg-4">
                                    <ProductCard key={elm._id} {...elm} />
                                </Col>
                            )}
                        </Row>
                    </main>
                </Container>


                <Modal show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Nuevo Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <NewProductForm closeModal={() => this.handleModal(false)} refreshList={this.loadProducts} />
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default ProductsList