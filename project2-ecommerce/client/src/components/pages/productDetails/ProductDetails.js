import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import EditProduct from './../editProduct/EditProduct'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';


import productService from './../../../service/products.service'

class ProductDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: {},
            showModal: false
        }
        this.productService = new productService()
    }
    handleModal = showModal => {
        this.setState({ showModal })
    }

    componentDidMount = () => {
        this.productService
            .getOneProduct(this.props.match.params.product_id)
            .then(response => this.setState(response.data))
            .catch(err => console.log('Error:', err))
    }

    deleteProduct = () => {
        this.productService
            .deleteProduct(this.props.match.params.product_id)
            .then(response => this.setState(response.data))
            .catch(err => console.log('Error:', err))
    }

    render() {

        return (
            <>
                <Container>
                    <main className="pt-4 pb-4">
                        <h1>{this.state.title}</h1>
                        <hr />
                        <Row>
                            <Col md={{ span: 4, offset: 1 }}>
                                <p>{this.state.description}</p>
                                <hr />
                                <p>Stock: {this.state.stock}</p>
                                <p>{this.state.price}</p>
                                <hr />
                                <Link className="btn btn-warning btn-sm mr-4" onClick={() => this.handleModal(true)} >Edit</Link>
                                <Link to="/shop" className="btn btn-danger btn-sm mr-4" onClick={() => this.deleteProduct()}>Delete</Link>
                                <hr />
                                <Link to={`/login`}>
                                    <Button size="small" color="dark">
                                        <FavoriteBorderIcon />
                                    </Button>
                                </Link>
                                <Link to="/shop" className="btn btn-dark btn-sm mr-4">Back to shop</Link>

                                <hr />
                                <Link to="/login" className="btn btn-primary btn-md mt-4">Buy!</Link>
                            </Col>
                            <Col md={6}>
                                <img style={{ width: '100%' }} alt={this.state.title} src={this.state.imgUrl} />
                            </Col>
                        </Row>
                    </main>
                </Container>
                <Modal show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditProduct {...this.props} closeModal={() => this.handleModal(false)} />
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default ProductDetails