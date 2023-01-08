import React from 'react';
import './Cta.css';
import mobileMockup from '../../image/mobileMockup.png';
import appleImg from '../../image/appleImg.png';
import { faAppleAlt, faAppleWhole } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cta = () => {
    return (
                <div className='row gx-0 ctaBg d-flex align-items-center'>
                    <div className='col-6'>
                        <div className='ctaText'>  
                            <p className='text-primary'>Get Our Aplication</p>
                            <h1>You Can Easily Find This App…!</h1>
                            <p>I say chap that’s suing lavatory chip shop gosh off his smashing boot are you taking the piss posh loo brilliant.</p>

                            <div className='d-lg-flex align-items-center ctaButtonGroup'>
                                <button className='rounded-2 border-0 bg-light ctaButton me-2'>
                                        <a className='d-flex align-items-center text-decoration-none text-dark' href="https://www.apple.com/store">
                                            <div className='col-3'>
                                            <FontAwesomeIcon className='appleLogo' icon={faAppleAlt}/>
                                            </div>

                                            <div className='col-9'>
                                                <small className='smallText 
                                                text-secondary'>Download on the</small>
                                                <h6>App Store</h6>
                                            </div>
                                        </a>
                                </button>

                                <button className='rounded-2 border-0 ctaButton bg-white'>
                                    <a href="https://www.apple.com/store">
                                        <img src={appleImg} alt="" />
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='col-6'>
                        <img className='img-fluid ctaImg' src={mobileMockup} alt="" />
                    </div>
            </div>
    );
};

export default Cta;