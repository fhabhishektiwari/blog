import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';

const Contact = () => {
    const [showA, setShowA] = useState(true);

    const toggleShowA = (e) => {
        setShowA(!showA);
        e.preventDefault();
    } 

    return (
        <>
            <Container className='mt-4'>
                <Row>
                    <Col xs={4}>
                        <h1 className='display-6 mt-5'>Contact Us</h1>
                    </Col>
                    <Col xs={4}>
                        <Form className='mt-5'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={toggleShowA}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col xs={4}>
                    <Toast show={showA} onClose={toggleShowA}>
                    <Toast.Header>
                      <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                      />
                      <strong className="me-auto">Bootstrap</strong>
                      <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                  </Toast>
                    </Col>
                </Row>

            </Container>
        </>

    );
}

export default Contact;