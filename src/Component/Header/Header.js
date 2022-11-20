import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navigation from '../Navigation/Navigation';
import TextImage from '../TextImage/TextImage';



const Header = () => {
    return (
       <div className='header'>
        <Navigation></Navigation>
        <TextImage></TextImage>
       </div>
    );
};

export default Header;