import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import VegItems from "./VegItems";
import NonVegItems from "./NonVegItems";
import Milk from "./Milk";
import Cart from "./Cart";
import Orders from "./Orders";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import LoginComponent from "./LoginComponent";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import store, { logout } from "./store";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import PageNotFound from "./pagenotfound";

function App() {
  const cart = useSelector(state => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);

  const dispatch = useDispatch();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar className="bg-primary w-100 fixed-top" expand="lg" variant="dark" style={{ zIndex: 1000 }}>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/Home" className="text-light"><i className="fa-solid fa-house"></i> Home</Nav.Link>
                <Nav.Link as={Link} to="/Veg" className="text-light"><i className="fa-solid fa-carrot"></i> Veg Items</Nav.Link>
                <Nav.Link as={Link} to="/nonVeg" className="text-light"><i className="fa-solid fa-drumstick-bite"></i> Non-Veg</Nav.Link>
                <Nav.Link as={Link} to="/milk" className="text-light"><i className="fa-solid fa-cow"></i> Milk</Nav.Link>
                <Nav.Link as={Link} to="/cart" className="text-light"><i className="fa-solid fa-cart-shopping"></i> Cart <span className="badge bg-secondary">{totalItems}</span></Nav.Link>
                <Nav.Link as={Link} to="/orders" className="text-light"><i className="fa-solid fa-bars"></i> Orders</Nav.Link>
                <Nav.Link as={Link} to="/aboutUs" className="text-light"><i className="fa-solid fa-address-card"></i> About Us</Nav.Link>
                <Nav.Link as={Link} to="/contactUs" className="text-light"><i className="fa-regular fa-address-book"></i> Contact Us</Nav.Link>
              </Nav>
              <Nav>
                {isAuthenticated ? (
                  <>
                    <Nav.Item className="me-2">
                      <span style={{ color: 'white' }}>Welcome, {user}!</span>
                    </Nav.Item>
                    <Nav.Item>
                      <Button variant="outline-light" onClick={() => dispatch(logout())}>Logout</Button>
                    </Nav.Item>
                  </>
                ) : (
                  <Nav.Link as={Link} to="/login" className="text-light" style={{ backgroundColor: 'blue' }}>Signup</Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container fluid className="vh-100">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/Veg" element={<VegItems />} />
            <Route path="/nonVeg" element={<NonVegItems />} />
            <Route path="/milk" element={<Milk />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contactUs" element={<Contact />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
        </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
