import React from 'react';
import './Cta.css';
import mobileMockup from '../../image/mobileMockup.png';

const Cta = () => {
    return (
                <div className='row gx-0 ctaBg d-flex align-items-center'>
                    <div className='col'>
                        <div className='ctaText'>  
                        <p>Get Our Aplication</p>
                        <h1>You Can Easily Find This App…!</h1>
                        <p>I say chap that’s suing lavatory chip shop gosh off his smashing boot are you taking the piss posh loo brilliant.</p>
                        </div>
                    </div>
                    <div className='col'>
                        <img className='img-fluid ctaImg' src={mobileMockup} alt="" />
                    </div>
            </div>
    );
};

export default Cta;