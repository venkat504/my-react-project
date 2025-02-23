import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row, Col, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

function VegItems() {
    const dispatch = useDispatch();
    const vegItems = useSelector(state => state.products.veg);

    const [category, setCategory] = useState(null); // Default null to allow deselection
    const [pageNumber, setPageNumber] = useState(1);
    const perPage = 6;

    // Filter items based on price
    let filteredItems = vegItems;
    if (category === "below100") {
        filteredItems = vegItems.filter(item => item.price < 100);
    } else if (category === "above100") {
        filteredItems = vegItems.filter(item => item.price >= 100);
    }

    const totalPages = Math.ceil(filteredItems.length / perPage);
    const pageStartItemIndex = (pageNumber - 1) * perPage;
    const currentItems = filteredItems.slice(pageStartItemIndex, pageStartItemIndex + perPage);

    const handlePageChange = (page) => {
        setPageNumber(page);
    };

    const handleCategoryChange = (value) => {
        setCategory(prev => (prev === value ? null : value));
    };

    return (
        <Container>
            <h1 className="text-center text-purple my-4">Welcome To VegItems.......</h1>

            {/* Toggle Between Categories */}
            <div className="d-flex justify-content-center mb-4">
                <ToggleButtonGroup type="radio" name="priceFilter" value={category}>
                    <ToggleButton 
                        variant="outline-success" 
                        id="below100" 
                        value="below100" 
                        onClick={() => handleCategoryChange("below100")}
                    >
                        Below ₹100
                    </ToggleButton>
                    <ToggleButton 
                        variant="outline-danger" 
                        id="above100" 
                        value="above100" 
                        onClick={() => handleCategoryChange("above100")}
                    >
                        Above ₹100
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>

            <Row xs={1} md={2} lg={3} className="g-4">
                {currentItems.map(item => (
                    <Col key={item.id}>
                        <Card className="h-100">
                            <Card.Img 
                                variant="top" 
                                src={item.image}  
                                alt={item.name} 
                                style={{ height: '200px', objectFit: 'cover' }} 
                                onError={(e) => { 
                                    e.target.onerror = null; 
                                    e.target.src = "placeholder_image.jpg"; 
                                }}
                            />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="text-goldenrod">{item.name}</Card.Title>
                                <Card.Text>₹{item.price}</Card.Text>
                                <Button
                                    variant="outline-success"
                                    onClick={() => dispatch(addToCart(item))}
                                    className="mt-auto"
                                >
                                    Add to Cart
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="d-flex justify-content-center mt-4">
                    <Button 
                        variant="primary" 
                        onClick={() => handlePageChange(pageNumber - 1)} 
                        disabled={pageNumber === 1}
                    >
                        Previous
                    </Button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <Button 
                            key={page} 
                            variant="outline-primary" 
                            onClick={() => handlePageChange(page)}
                            active={page === pageNumber}
                            className="mx-1"
                        >
                            {page}
                        </Button>
                    ))}
                    <Button 
                        variant="primary" 
                        onClick={() => handlePageChange(pageNumber + 1)} 
                        disabled={pageNumber === totalPages}
                    >
                        Next
                    </Button>
                </div>
            )}
        </Container>
    );
}

export default VegItems;
