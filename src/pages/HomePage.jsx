import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HomePage.css'; 

const HomePage = () => {
    return (
        <div className="homepage-wrapper">
            <Container fluid className="homepage-content">
                <Row className="justify-content-center text-center">
                    <Col md={8}>
                        <h1 className="homepage-title">Welcome to Homestay Haven</h1>
                        <p className="homepage-subtitle">
                            Discover unique homestays and explore breathtaking tourist destinations around the world.
                        </p>
                        <Button variant="light" className="homepage-btn">Explore Now</Button>
                        <Button variant="outline-light" className="homepage-btn-alt">Become a Host</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomePage;
