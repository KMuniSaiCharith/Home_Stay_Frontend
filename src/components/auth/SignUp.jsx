import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import './SignUp.css';  // Import the CSS file for custom styles
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const [userDetails, setUserDetails] = useState({
        username: '',
        password: '',
        role: ''
    });

    const handleInputChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = JSON.stringify(userDetails)
        
        // URL of your Java backend API for signup
        const url = 'http://localhost:8080/api/users/signup';

        callApi('POST', url, data, getResponse);
    };

    // Function to call the API
    const callApi = (method, url, data, responseHandler) => {
        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        };

        fetch(url, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.status + ": " + response.statusText);
                }
                return response.text();
            })
            .then(data => responseHandler(data))
            .catch(error => alert(error));
    };

    const navigate = useNavigate();

    // Handle the API response
    const getResponse = (response) => {
        if (response === '{"message":"User registered successfully"}') {
            navigate("/");   
        } else {
            alert("Signup failed: " + response);
        }
    };

    return (
        <div className="signup-wrapper">
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <Card className="signup-card">
                            <Card.Body>
                                <Card.Title className="signup-title" color='white'>Sign Up</Card.Title>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="formUsername" className="mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter username"
                                            name="username"
                                            value={userDetails.username}
                                            onChange={handleInputChange}
                                            required
                                            className="input-field"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formPassword" className="mb-3">
                                        <Form.Control
                                            type="password"
                                            placeholder="Enter password"
                                            name="password"
                                            value={userDetails.password}
                                            onChange={handleInputChange}
                                            required
                                            className="input-field"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formRole" className="mb-3">
                                        <Form.Select
                                            name="role"
                                            value={userDetails.role}
                                            onChange={handleInputChange}
                                            required
                                            className="input-field"
                                        >
                                            <option value="">Select Role</option>
                                            <option value="Admin">Admin</option>
                                            <option value="Tourist">Tourist</option>
                                            <option value="Guide">Guide</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Button variant="primary" type="submit" className="w-100 custom-button">
                                        Sign Up
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Signup;
