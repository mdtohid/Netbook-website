import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Navigation.css';
import logo from '../../image/Group.png';

const Navigation = () => {
    return (
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
    );
};

export default Navigation;