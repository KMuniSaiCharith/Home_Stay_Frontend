import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import './Login.css';  // Import the CSS file for custom styles
import { useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const navigate = useNavigate()

    const handleInputChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const data = JSON.stringify({
            username: credentials.username,
            password: credentials.password
        });

        // URL of your Java backend API
        const url = 'http://localhost:8080/api/login';

        callApi('POST', url, data, getResponse);
    };

    // Function to call the API
    function callApi(METHOD, URL, DATA, responseHandler){
		var options;
		if(METHOD === "GET" || METHOD === "DELETE")//for GET & DELETE, No need of JSON Input from RequestBody
			options = {method: METHOD, headers:{'Content-Type':'application/json'}};
		else//for PUT(UPDATE) & POST(INSERT), Need of JSON Input from Requestbody
			options = {method: METHOD, headers:{'Content-Type':'application/json'}, body: DATA};
		fetch(URL, options)//predefined method in JS
			.then(response => {
				if(!response.ok)
					throw new Error(response.status + ": " + response.statusText);
				return response.text();
			})
			.then(data => responseHandler(data))
			.catch(error => alert(error));
	}

    // Handle the API response
    const getResponse = (response) => {
         if (response === "Authorised User") {
            navigate("/home");
         } else {
            alert("Login failed: " + response);
        }
    };

    return (
        <div className="login-wrapper">
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <Card className="login-card">
                            <Card.Body>
                                <Card.Title className="signin-title" color='white'>Sign In</Card.Title>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="formUsername" className="mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter username"
                                            name="username"
                                            value={credentials.username}
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
                                            value={credentials.password}
                                            onChange={handleInputChange}
                                            required
                                            className="input-field"
                                        />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" className="w-100 custom-button">
                                        Sign In
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

export default Login;
