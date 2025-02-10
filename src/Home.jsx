import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";

const Home = () => {
    const navigate = useNavigate();

    // Define category data with images
    const categories = [
        { name: "Vegetables", image: "/Vegetables.jpeg", route: "/Veg" },
        { name: "Non-Veg", image: "/nonveg.jpeg", route: "/nonVeg" },
        { name: "Milk Products", image: "/milk.jpeg", route: "/milk" }
    ];

    const handleNavigate = (route) => {
        navigate(route);
    };

    return (
        <Container className="text-center mt-5">
            <h1 className="display-4 fw-bold text-primary">Welcome to Our Store</h1>
            <p className="lead text-secondary mt-3">Choose a category to explore our fresh products.</p>

            {/* Category Menu */}
            <Row className="justify-content-center g-4 mt-4">
                {categories.map((category) => (
                    <Col key={category.name} xs={12} md={4}>
                        <Card
                            className="shadow-lg"
                            onClick={() => handleNavigate(category.route)}
                            style={{ cursor: "pointer" }}
                        >
                            <Card.Img
                                variant="top"
                                src={category.image}
                                alt={category.name}
                                style={{ height: "200px", objectFit: "cover" }}
                                onError={(e) => {
                                    e.target.src = "/placeholder.jpg";
                                }}
                            />
                            <Card.Body>
                                <Card.Title>{category.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Home;
