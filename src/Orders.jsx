import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, ListGroup, Image } from 'react-bootstrap';

function Orders() {
    const purchaseDetails = useSelector(state => state.purchaseDetails);

    return (
        <Container>
            <h1 className="text-center text-purple my-4">Purchase History</h1>
            {purchaseDetails.length > 0 ? (
                purchaseDetails.map((order, index) => (
                    <Card key={index} className="mb-3 shadow-lg"> {/* Card for each order */}
                        <Card.Header className="bg-primary text-white">
                            Purchase Date: {order.date}
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className="text-success">
                                Total Amount: ₹{order.totalPrice.toFixed(2)}
                            </Card.Title> {/* Formatted price */}
                            <ListGroup variant="flush"> {/* ListGroup for items */}
                                {order.items.map((item) => (
                                    <ListGroup.Item 
                                        key={item.id || item.name + item.price } 
                                        className="d-flex align-items-center"
                                    >
                                        <Image 
                                            src={item.image} 
                                            alt={item.name} 
                                            rounded 
                                            style={{ width: '60px', height: '60px', objectFit: 'cover', marginRight: '15px' }} 
                                            onError={(e) => { e.target.onerror = null; e.target.src = "placeholder_image.jpg"; }}
                                        />
                                        <div>
                                            <strong>{item.name}</strong> - ₹{item.price} x {item.quantity}
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                ))
            ) : (
                <p className="text-center text-muted">No Purchase History...</p>
            )}
        </Container>
    );
}

export default Orders;
