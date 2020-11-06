import React from 'react';
import Form from 'react-bootstrap/Form'

export default function repairForm() {
    return (
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Brand</Form.Label>
                <Form.Control as="select">
                    <option>Samsung</option>
                    <option>Xiaomi</option>
                    <option>Huawei</option>
                    <option>Apple</option>
                    <option>Otros</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Reparación</Form.Label>
                <Form.Control as="select" multiple>
                    <option>Pantalla</option>
                    <option>Bateria</option>
                    <option>Camara</option>
                    <option>Otros</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Explain your problem</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </Form>
    )
}