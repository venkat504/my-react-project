import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';

function LoginComponent() {
    let username = useRef(null);
    let password = useRef(null);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    let loginCheck = () => {
        if (username.current.value === "Banji" && password.current.value === "Banji@123") {
            dispatch(login(username.current.value));
            navigate("/Home");
        } else {
            alert("Your credentials are wrong. Please check again.");
        }
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center"> {/* Center the card */}
            <h1>Login Page</h1>
                <Col xs={12} sm={8} md={6} lg={4}> {/* Adjust column sizes for responsiveness */}
                    <Card>
                        <Card.Body>
                            
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>User Name:</Form.Label>
                                    <Form.Control type="text" ref={username} placeholder="Enter username" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control type="password" ref={password} placeholder="Enter password" />
                                </Form.Group>

                                <Button variant="primary" onClick={loginCheck} className="w-100">Login</Button> {/* Full-width button */}
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginComponent;