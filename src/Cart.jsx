import { useDispatch, useSelector } from "react-redux";
import { addPurchaseDetails, clearCart, decrement, increment, remove } from "./store";
import "./App.css";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ListGroup, Button, Form, Image } from 'react-bootstrap';

function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const finalItems = cartItems.map((item) => (
        <ListGroup.Item key={item.id || `${item.name}-${item.price}`}>
            <Row className="align-items-center">
                <Col xs={3}>
                    <Image src={item.image} thumbnail fluid />
                </Col>
                <Col xs={3}>{item.name} - ₹{item.price.toFixed(2)}</Col>
                <Col xs={3} className="d-flex justify-content-around">
                    <Button variant="success" size="sm" onClick={() => dispatch(increment(item))}>+</Button>
                    <span>{item.quantity}</span>
                    <Button variant="warning" size="sm" onClick={() => dispatch(decrement(item))}>-</Button>
                </Col>
                <Col xs={3}>
                    <Button variant="danger" size="sm" onClick={() => dispatch(remove(item))}>Remove</Button>
                </Col>
            </Row>
        </ListGroup.Item>
    ));

    const [discountPercentage, setDiscountPercentage] = useState(0);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
    const discountAmount = totalPrice * discountPercentage / 100;
    const finalAmount = totalPrice - discountAmount;

    const [showDiscount, setShowDiscount] = useState(false);
    const [couponCode, setCouponCode] = useState('');
    const [couponCodeDiscountPercentage, setCouponCodeDiscountPercentage] = useState(0);

    const handleCouponPercentage = () => {
        switch (couponCode.toUpperCase()) {
            case 'ANJI10':
                setCouponCodeDiscountPercentage(10);
                break;
            case 'ANJI20':
                setCouponCodeDiscountPercentage(20);
                break;
            case 'ANJI30':
                setCouponCodeDiscountPercentage(30);
                break;
            default:
                alert('Invalid coupon code');
                setCouponCodeDiscountPercentage(0);
        }
    };

    const couponDiscountAmount = totalPrice * couponCodeDiscountPercentage / 100;
    const netAmount = finalAmount - couponDiscountAmount;

    const [showCouponDiscount, setShowCouponDiscount] = useState(false);

    const handleCompletePurchase = () => {
        const purchaseDate = new Date().toLocaleDateString();
        const purchaseDetails = {
            date: purchaseDate,
            items: [...cartItems],
            totalPrice: totalPrice
        };
        dispatch(addPurchaseDetails(purchaseDetails));
        dispatch(clearCart());
    };
    const handleCompletePurchaseitems = () => {
        if (!isAuthenticated) {
            alert("You are not logged in. Please login to complete your purchase.");
            return;
        }
        
        const purchaseDate = new Date().toLocaleDateString();
        const purchaseDetails = {
            date: purchaseDate,
            items: [...cartItems],
            totalPrice: totalPrice
        };
        dispatch(addPurchaseDetails(purchaseDetails));
        dispatch(clearCart());
        alert("Purchase completed successfully!");
    };


    return (
        <Container>
            <h1 className="text-center text-purple my-4">Welcome To Cart Page...</h1>
            {cartItems.length > 0 ? (
                <div>
                    <ListGroup>{finalItems}</ListGroup>
                    <p className="mt-3">Your Total Price: ₹{totalPrice.toFixed(2)}</p>

                    {showDiscount && (
                        <>
                            <p>Your Discount Percentage: {discountPercentage}%</p>
                            <p>Your Discount Amount: ₹{discountAmount.toFixed(2)}</p>
                        </>
                    )}

                    <p>Your Final Amount to pay: ₹{finalAmount.toFixed(2)}</p>
                    <div className="mb-3">
                        <Button variant="primary" size="sm" onClick={() => { setDiscountPercentage(10); setShowDiscount(true); }}>Apply 10% discount</Button>{' '}
                        <Button variant="primary" size="sm" onClick={() => { setDiscountPercentage(20); setShowDiscount(true); }}>Apply 20% discount</Button>{' '}
                        <Button variant="primary" size="sm" onClick={() => { setDiscountPercentage(30); setShowDiscount(true); }}>Apply 30% discount</Button>
                    </div>

                    <Form.Group className="mb-3">
                        <Form.Label>Enter Coupon Code:</Form.Label>
                        <Form.Control
                            type="text"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                            placeholder="Enter Coupon Code"
                        />
                    </Form.Group>

                    {showCouponDiscount && (
                        <>
                            <p>Your coupon code applied: {couponCode}</p>
                            <p>Your coupon code discount: ₹{couponDiscountAmount.toFixed(2)}</p>
                        </>
                    )}

                    <p>Net amount to pay: ₹{netAmount.toFixed(2)}</p>
                    <div className="mb-3">
                        <Button variant="success" size="sm" onClick={() => { handleCouponPercentage(); setShowCouponDiscount(true); }}>Apply Coupon Code</Button>
                    </div>
                    <Button variant="success" onClick={handleCompletePurchaseitems}>Complete Purchase</Button>
                </div>
            ) : (
                <p>Cart is empty</p>
            )}
        </Container>
    );
}

export default Cart;
