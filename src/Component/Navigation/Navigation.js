import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Navigation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../image/Group.png';


const Navigation = () => {
    return (
        <Navbar className='border-bottom border-light border-2 p-2' bg={logo} expand="lg">
            <Container fluid>
                <Navbar.Brand className='d-flex ms-5 me-5' href="#">
                        <div>
                        <img src={logo} alt=""/>
                        </div>
                        <h4>Netbook</h4>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1" className='menuText'>Home</Nav.Link>

                    <NavDropdown className='menuText' title="Community" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action2">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                        Something else here
                    </NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link className='menuText' href="#action5">Blog</Nav.Link>
                    <Nav.Link className='menuText' href="#action6">Events</Nav.Link>
                </Nav>
                <Form className="d-flex align-items-center">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-3 search"
                    aria-label="Search"
                    />
                    <Button variant="outline-success" className='bg-primary text-white login me-5'>Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;


        /*
            <div className='navigation d-flex align-items-center'>
                    <div className='logo d-flex'>
                    <div>
                    <img src={logo} alt=""/>
                    </div>
                    <h4>Netbook</h4>
                    </div>
                    <div className='d-flex menu'>
                        <p>Home</p>
                        <p className='ms-4'>Community</p>
                        <p className='ms-4'>Blogs</p>
                        <p className='ms-4'>Events</p>
                    </div>
                    <div>
                        <Form className="d-flex search">
                            <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            />
                        </Form>
                    </div>
                    <div>
                        <Button className='login'>Login</Button>
                    </div>
            </div> 
        */